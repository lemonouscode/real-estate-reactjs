import * as yup from "yup";

export const registerSchema = () => {
    return yup.object().shape({
        name: yup.string().min(3).required('Name is required'),
        email: yup.string().email().required(),
        password: yup.string().min(5).required("Password is required"),
      });
}
