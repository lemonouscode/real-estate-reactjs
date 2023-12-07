import { useFormik } from "formik"
import { submitContactFormSchema } from "../schemas/submitContactFormSchema"
import contactApi from "../services/ContactApi"
import { useState } from "react"

export const useContact = () => {

    const [status, setStatus] = useState("");

    const onSubmit = async (values) =>{

        const formData = new FormData();

        formData.append('name',values.name );
        formData.append('email',values.email );
        formData.append('message',values.message );

        // Submitting form data to backend
        const resp = await contactApi.submitContact(formData);
        setStatus(resp.message)
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
