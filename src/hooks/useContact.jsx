import { useFormik } from "formik"
import { submitContactFormSchema } from "../schemas/submitContactFormSchema"
import { useState } from "react"
import { useSubmitContactMutation } from "../redux/features/contactApi"

export const useContact = () => {

    const [status, setStatus] = useState("");
    const [submitForm] = useSubmitContactMutation();

    const onSubmit = async (values) =>{

        const formData = new FormData();

        formData.append('name',values.name );
        formData.append('email',values.email );
        formData.append('message',values.message );

        // Submitting form data to backend
        const {data} = await submitForm(formData);
        setStatus(data.message)
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
          name: "",
          email: "",
          message: ""
        },
        validationSchema: submitContactFormSchema,
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
        status
    }
}
