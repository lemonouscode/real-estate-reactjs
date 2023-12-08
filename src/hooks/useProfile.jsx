import { selectName, selectID } from "../redux/authSlice";
import { useSelector } from "react-redux";
import villaApi from "../services/VillaApi";
import { useEffect, useState } from "react";

export const useProfile = () => {

  const name = useSelector(selectName);
  const userID = useSelector(selectID);
  const [userDetails, setUserDetails] = useState("");

  const handleGetSavedVillas = async ()=>{
    const {user} = await villaApi.getSavedVillas(userID);

    setUserDetails(user);
  }

  const handleUnsaveVilla = async (villaID)=>{
    const resp = await villaApi.unSaveVilla(villaID);
  }

  useEffect(()=>{
    handleGetSavedVillas();
  },[])

  return {
    name,
    userDetails,
    handleUnsaveVilla
  }
}
