import { MyButton } from "./MyButton"

export const RegisterFormUI = ({formData, registerStatus}) => {

    const {
        values,
        errors,
        touched,
        isSubmitting,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
    } = formData

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-[800px] mx-auto gap-3 text-white'>
        <label className='flex flex-col'>
            Name
            <input 
                className="text-black"
                type="text" 
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </label>
        {errors.name && touched.name && <p className="text-red-800">{errors.name}</p> }
        <label className='flex flex-col'>
            Email
            <input 
                className="text-black"
                type="email" 
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </label>
        {errors.email && touched.email && <p className="text-red-800">{errors.email}</p> }
        <label className='flex flex-col'>
            Password
            <input 
                className="text-black"
                type="password" 
                id="password" 
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </label>
        {errors.password && touched.password && <p className="text-red-800">{errors.password}</p> }
        {registerStatus && <p className="text-red-800">{registerStatus}</p> }
        <button disabled={isSubmitting || !isValid} type='submit'>
            <MyButton buttonText="Register" />
        </button>
    </form>
  )
}
