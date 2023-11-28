import { useEffect, useState } from 'react'
import villaApi from '../services/VillaApi'

export const useHome = () => {

  const [featuredVillas, setFeaturedVillas] = useState("");

  const handleGetFeaturedVillas = async () =>{
    const {Featured_Villas} = await villaApi.getFeaturedVillas();
    setFeaturedVillas(Featured_Villas)
  }

  useEffect(()=>{
    handleGetFeaturedVillas();
  },[])

  return (
    {
        featuredVillas
    }
  )
}
