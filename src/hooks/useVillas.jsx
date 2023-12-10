import { useState, useEffect } from 'react';
import { useGetVillasQuery, useDeleteVillaMutation } from '../redux/features/villaApi';

export const useVillas = () => {
  
  const [villas, setVillas] = useState([]);

  const {data, refetch} = useGetVillasQuery();
  const [deleteVilla] = useDeleteVillaMutation();
  
  useEffect(() => {
    setVillas(data?.villas)
  }, [data]);


  const handleRemoveVilla = async (slug)=>{
    await deleteVilla(slug);
    refetch();
  }

  return { villas, handleRemoveVilla }

}
