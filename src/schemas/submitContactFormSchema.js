import * as yup from "yup";

export const submitContactFormSchema = () => {
    return yup.object().shape({
        name: yup.string().min(2).required("Name is required"),
        email: yup.string().email().required(),
        message: yup.string().min(5).required("Message is required"),
      });
}
