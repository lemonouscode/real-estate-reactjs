import { ContactForm } from "../components/ContactForm"
import { useContact } from "../hooks/useContact";

export const Contact = () => {

    const {
        values,
        errors,
        touched,
        isSubmitting,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
        status
      } = useContact();

    
  return (
    <section className="pt-[75px] pb-[75px] px-[5%] min-h-screen max-md:pt-[100px]">
        <ContactForm formData={{
            values,
            errors,
            touched,
            isSubmitting,
            isValid,
            handleBlur,
            handleChange,
            handleSubmit,
        }} 
        />
        {status && <p className="text-green-800 text-center text-2xl font-bold pt-5">{status}</p> }
    </section>
  )
}
