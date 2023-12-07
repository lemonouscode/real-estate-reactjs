import { useEffect } from "react";
import { LoginFormUI } from "../components/LoginFormUI"
import { useLogin } from "../hooks/useLogin"
import { useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from "../redux/authSlice";

export const Login = () => {

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
    loginStatus,
    token,
    isAdmin,
    name
    } = useLogin();

  
  useEffect(()=>{
    if(token.length > 0){
      const payload = {
        token:token,
        isAdmin:isAdmin,
        name:name
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
    <section className="pt-[75px]">
        <LoginFormUI 
          formData={{
              values,
              errors,
              touched,
              isSubmitting,
              isValid,
              handleBlur,
              handleChange,
              handleSubmit,
          }}
          loginStatus={loginStatus}
        />
    </section>
  )
}
