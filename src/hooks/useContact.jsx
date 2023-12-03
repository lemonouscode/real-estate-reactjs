import { useFormik } from "formik"
import { submitContactFormSchema } from "../schemas/submitContactFormSchema"
import contactApi from "../services/ContactApi"

export const useContact = () => {

    const onSubmit = async (values) =>{

        const formData = new FormData();

        formData.append('name',values.name );
        formData.append('email',values.email );
        formData.append('message',values.message );

        // Submitting form data to backend
        await contactApi.submitContact(formData);
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
        handleSubmit
    }
}
