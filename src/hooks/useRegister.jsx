import { useFormik } from "formik"
import { registerSchema } from "../schemas/registerSchema"
import { useState } from "react"
import { useRegisterMutation } from "../redux/features/authApi";

export const useRegister = () => {

  const [register] = useRegisterMutation();

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
    const {data: res} = await register(formData);
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
