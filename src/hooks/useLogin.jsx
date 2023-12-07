import { useFormik } from "formik"
import { loginSchema } from "../schemas/loginSchema"
import usersApi from "../services/UsersApi"
import { useState } from "react"

export const useLogin = () => {

    const [loginStatus, setLoginStatus] = useState("");
    const [token, setToken] = useState("");
    const [isAdmin, setIsAdmin] = useState("");
    const [name, setName] = useState("");

    const onSubmit = async (values) =>{
  
      const formData = new FormData();
  
      formData.append('email',values.email );
      formData.append('password',values.password );
  
      // Submitting form data to backend
      const res = await usersApi.loginUser(formData);
      if(res.status == "error"){
        setLoginStatus(res.message)
      }
      else{
        setToken(res.token)
        setIsAdmin(res.is_admin)
        setName(res.name)
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
        email: "",
        password: ""
      },
      validationSchema:loginSchema,
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
      loginStatus,
      token,
      isAdmin,
      name
  }
}
