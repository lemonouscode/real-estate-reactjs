import { MyButton } from "./MyButton"

export const LoginFormUI = ({formData, loginStatus}) => {

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
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-[800px] mx-auto gap-3 text-white'>
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
            {loginStatus && <p className="text-red-800">{loginStatus}</p> }
            <button disabled={isSubmitting || !isValid} type='submit'>
                <MyButton buttonText="Login" />
            </button>

        </form>
    </div>
  )
}
