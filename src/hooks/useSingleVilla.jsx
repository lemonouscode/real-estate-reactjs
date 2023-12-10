import {useParams} from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { selectID } from "../redux/authSlice";
import { useSelector } from "react-redux";
import { useSaveVillaMutation, useGetSavedVillasQuery, useGetVillaBySlugQuery } from "../redux/features/villaApi";

export const useSingleVilla = () => {

  const {villaSlug} = useParams()
  const userID = useSelector(selectID);

  const [villaDetails, setVillaDetails] = useState("");
  const [savedVilla, setSavedVilla] = useState("");

  const [saveVilla] = useSaveVillaMutation();
  const {data:savedVillas, refetch} = useGetSavedVillasQuery();
  const {data} = useGetVillaBySlugQuery(villaSlug);


  // Get villa by slug
  useEffect(()=>{
    if(data){
      setVillaDetails(data);
    }
  },[data])

  const handleSaveVilla = async ()=>{
    // I need userID and Slug
    const data = {id:userID, slug:villaSlug}

    const {data: resp} = await saveVilla(data);
    setSavedVilla(resp);
    refetch();
  }

  const contactSectionRef = useRef(null);

  const scrollToContactSection = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayTextWithLineBreaks = () => {
    return villaDetails?.description.split('\n').map((line, index) => (
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
