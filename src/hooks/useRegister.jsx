import { useFormik } from "formik"
import { registerSchema } from "../schemas/registerSchema"
import usersApi from "../services/UsersApi";
import { useState } from "react"

export const useRegister = () => {

  const [registerStatus, setRegisterStatus] = useState("");
  const [token, setToken] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  const onSubmit = async (values)=>{

    const formData = new FormData();
  
    formData.append('name',values.name );
    formData.append('email',values.email );
    formData.append('password',values.password );

    // Submitting form data to backend
    const res = await usersApi.registerUser(formData);
    if(res.status == "error"){
        setRegisterStatus(res.message)
    }
    else{
        setToken(res.token)
        setIsAdmin(res.is_admin)
        setName(res.user.name)
        setUserId(res.user.id)
    }
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    validationSchema:registerSchema,
    onSubmit,
    });     

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
    registerStatus,
    token,
    isAdmin,
    name,
    userId
  }
}
