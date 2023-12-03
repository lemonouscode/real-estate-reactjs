import { MyButton } from "./MyButton"

export const ContactForm = ({formData}) => {

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
                Message
                <textarea 
                    className="text-black"
                    type="text" 
                    rows={10}
                    cols={40}
                    id='message'
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </label>
            {errors.message && touched.message && <p className="text-red-800">{errors.message}</p> }
            <button disabled={isSubmitting || !isValid} type='submit'>
                <MyButton buttonText="Submit" />
            </button>

        </form>
    </div>
  )
}
