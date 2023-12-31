import { useFormik } from "formik"
import { loginSchema } from "../schemas/loginSchema"
import { useState } from "react"
import { useLoginMutation } from "../redux/features/authApi"

export const useLogin = () => {

    const [login] = useLoginMutation();

    const [loginStatus, setLoginStatus] = useState("");
    const [token, setToken] = useState("");
    const [isAdmin, setIsAdmin] = useState("");
    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");

    const onSubmit = async (values) =>{
  
      const formData = new FormData();
  
      formData.append('email',values.email );
      formData.append('password',values.password );
  
      // Submitting form data to backend
      const {data: res} = await login(formData);
      if(res.status == "error"){
        setLoginStatus(res.message)
      }
      else{
        setToken(res.token)
        setIsAdmin(res.is_admin)
        setName(res.name)
        setUserId(res.id)
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
      name,
      userId
  }
}
