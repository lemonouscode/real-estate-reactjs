import { useEffect, useState } from "react"
import contactApi from "../services/ContactApi"

export const useDashboard = () => {

  const [contacts, setContacts] = useState("");

  const handleGetContacts = async ()=>{
        
    const resp = await contactApi.getContact();
    setContacts(resp.SubmitedContactForms)
  }

  // fetch all contacts
  useEffect(()=>{
    handleGetContacts();
  },[])

  return {
    contacts
  }
}
