import * as yup from "yup";

export const loginSchema = () => {
    return yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(5).required("Password is required"),
      });
}
