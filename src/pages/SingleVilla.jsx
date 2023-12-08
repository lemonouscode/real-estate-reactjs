import { useSingleVilla } from "../hooks/useSingleVilla";
import { SingleVillaUI } from "../components/SingleVillaUI"
import { useContact } from "../hooks/useContact";
import { selectIsAdmin } from "../redux/authSlice";
import { useSelector } from "react-redux";

export const SingleVilla = () => {

  const isAdmin = useSelector(selectIsAdmin);

  const {
    villaDetails,
    contactSectionRef,
    scrollToContactSection,
    displayTextWithLineBreaks,
    handleSaveVilla,
    savedVilla
  } = useSingleVilla();

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
    <SingleVillaUI 
      villaDetails={villaDetails}
      contactSectionRef={contactSectionRef}
      scrollToContactSection={scrollToContactSection}
      displayTextWithLineBreaks={displayTextWithLineBreaks}
      handleSaveVilla = {handleSaveVilla}
      savedVilla = {savedVilla}
      isAdmin = {isAdmin}
      formData={{
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
  )
}
