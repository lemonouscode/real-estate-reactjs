import { useSingleVilla } from "../hooks/useSingleVilla";
import { SingleVillaUI } from "../components/SingleVillaUI"
import { useContact } from "../hooks/useContact";

export const SingleVilla = () => {

  const {
    villaDetails,
    contactSectionRef,
    scrollToContactSection,
    displayTextWithLineBreaks 
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
