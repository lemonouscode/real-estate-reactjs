import { selectName, selectID } from "../redux/authSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetSavedVillasQuery, useUnSaveVillaMutation } from "../redux/features/villaApi";

export const useProfile = () => {

  const name = useSelector(selectName);
  const userID = useSelector(selectID);
  const [userDetails, setUserDetails] = useState("");
  const {data, refetch} = useGetSavedVillasQuery(userID);
  const [unSaveVilla] = useUnSaveVillaMutation();

  const handleGetSavedVillas = async ()=>{
    if(data){
      const {user} = data;
      setUserDetails(user);
    }
  }

  const handleUnsaveVilla = async (villaID)=>{
    await unSaveVilla(villaID);
    refetch();
  }

  useEffect(()=>{
    handleGetSavedVillas();
  },[data])

  useEffect(()=>{
    refetch();
  },[userID,data])

  return {
    name,
    userDetails,
    handleUnsaveVilla
  }
}
