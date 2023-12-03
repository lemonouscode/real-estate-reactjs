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
        handleSubmit} = useContact();

    
  return (
    <section className="pt-[75px] pb-[75px]">
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
    </section>
  )
}
