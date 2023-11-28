import { useSingleVilla } from "../hooks/useSingleVilla";
import { SingleVillaUI } from "../components/SingleVillaUI"

export const SingleVilla = () => {

  const {villaDetails,
    contactSectionRef,
    scrollToContactSection,
    displayTextWithLineBreaks 
  } = useSingleVilla();

  return (
    <SingleVillaUI 
      villaDetails={villaDetails}
      contactSectionRef={contactSectionRef}
      scrollToContactSection={scrollToContactSection}
      displayTextWithLineBreaks={displayTextWithLineBreaks}
    />
  )
}
