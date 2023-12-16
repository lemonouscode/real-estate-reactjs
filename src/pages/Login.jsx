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
    name,
    userId
    } = useLogin();

  
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
    <section className="pt-[75px] min-h-screen px-[5%] max-md:pt-[100px]">
        <div className="max-w-[800px] mx-auto">
          <h1 className='text-white mb-5 text-6xl uppercase font-bold max-md:text-4xl'>Login Page</h1>
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
        </div>
    </section>
  )
}
