import { useEffect, useState } from 'react'
import { useGetFeaturedVillasQuery } from '../redux/features/villaApi';

export const useHome = () => {

  const [featuredVillas, setFeaturedVillas] = useState("");

  const {data, refetch} = useGetFeaturedVillasQuery();

  const handleGetFeaturedVillas = async () =>{
    if(data){
      const {Featured_Villas} = data;
      setFeaturedVillas(Featured_Villas)
    }
  }

  useEffect(()=>{
    handleGetFeaturedVillas();
  },[data])

  return (
    {
        featuredVillas
    }
  )
}
