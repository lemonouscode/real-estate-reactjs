import { useEffect, useState } from "react"
import { useGetContactQuery } from "../redux/features/contactApi";

export const useDashboard = () => {

  const [contacts, setContacts] = useState("");
  const {data} = useGetContactQuery();

  const handleGetContacts = async ()=>{
    const resp = data.SubmitedContactForms;
    setContacts(resp)
  }

  useEffect(()=>{
    handleGetContacts();
  },[data])

  return {
    contacts
  }
}
