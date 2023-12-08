import {useParams} from "react-router-dom"
import villaApi from "../services/VillaApi"
import { useEffect, useState, useRef } from "react"
import { selectID } from "../redux/authSlice";
import { useSelector } from "react-redux";

export const useSingleVilla = () => {

  const {villaSlug} = useParams()
  const userID = useSelector(selectID);

  const [villaDetails, setVillaDetails] = useState("");
  const [savedVilla, setSavedVilla] = useState("");

  const handleGetVillaDetails = async ()=>{
    const resp = await villaApi.getVillaByName(villaSlug);
    setVillaDetails(resp);
  }

  // Get villa by slug
  useEffect(()=>{
    handleGetVillaDetails();
  },[])


  const handleSaveVilla = async ()=>{
    // I need userID and Slug
    const data = {id:userID, slug:villaSlug}

    const resp = await villaApi.saveVilla(data);

    setSavedVilla(resp);
  }

  const contactSectionRef = useRef(null);

  const scrollToContactSection = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayTextWithLineBreaks = () => {
    return villaDetails.description.split('\n').map((line, index) => (
      <div key={index}>
        {line}
        <br />
      </div>
    ));
  };


  return (
    {
        villaDetails,
        contactSectionRef,
        scrollToContactSection,
        displayTextWithLineBreaks,
        handleSaveVilla,
        savedVilla
    }
  )
}
