import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { loginUser } from "../redux/authSlice";
import { useNavigate} from 'react-router-dom';

import { RegisterFormUI } from "../components/RegisterFormUI";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
    
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
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
    } = useRegister();


  useEffect(()=>{
    if(token.length > 0){
      const payload = {
        token:token,
        isAdmin:isAdmin,
        name:name,
        userId:userId
      }

      // Dispatch user details
      dispatch(loginUser(payload));

      if(isAdmin == 1){
        navigate('/dashboard', {replace:true}); //replace:true means disable back button
      }
      else{
        navigate('/profile', {replace:true});
      }
    }
  },[token])


  return (
    <section className="pt-[75px] px-[5%] min-h-screen">
        <RegisterFormUI formData={{ 
                values,
                errors,
                touched,
                isSubmitting,
                isValid,
                handleBlur,
                handleChange,
                handleSubmit,
            }}
            registerStatus={registerStatus}
        />
    </section>
  )
}
