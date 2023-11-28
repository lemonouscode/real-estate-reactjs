import { useState, useEffect } from 'react';
import VillaApi from "../services/VillaApi"

export const useVillas = () => {
  
  const [villas, setVillas] = useState([]);

  const handleFetchVillas = async () => {
    const { villas } = await VillaApi.getVillas();
    setVillas(villas);
  };

  useEffect(() => {
    handleFetchVillas();
  }, []);


  const handleRemoveVilla = async ($slug)=>{
    await VillaApi.deleteVilla($slug);
    handleFetchVillas();
  }

  return { villas, handleRemoveVilla }

}
