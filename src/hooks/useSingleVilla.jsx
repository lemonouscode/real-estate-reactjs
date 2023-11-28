import {useParams} from "react-router-dom"
import villaApi from "../services/VillaApi"
import { useEffect, useState, useRef } from "react"

export const useSingleVilla = () => {

const {villaSlug} = useParams()

  const [villaDetails, setVillaDetails] = useState("");

  const handleGetVillaDetails = async ()=>{
    const resp = await villaApi.getVillaByName(villaSlug);
    setVillaDetails(resp);
  }

  // Get villa by slug
  useEffect(()=>{
    handleGetVillaDetails();
  },[])


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
        displayTextWithLineBreaks
    }
  )
}
