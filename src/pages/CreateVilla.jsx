import useVilla from '../hooks/useVilla';
import { VillaUI } from '../components/VillaUI';
import villaApi from '../services/VillaApi';

export const CreateVilla = () => {

  
  const handleUpdateVilla = async (data)=>{
    return await villaApi.createVilla(data)
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
    setFieldValue,
    uploadStatus,
    feauturedRef,
    carouselRef,
    galleryRef,
  } = useVilla(handleUpdateVilla);  // Here goes second param to change true/false for replaceImages

  

  return (
    <div>
      <VillaUI 
        formData={{ values,
          errors,
          touched,
          isSubmitting,
          isValid,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          uploadStatus,
          feauturedRef,
          carouselRef,
          galleryRef, 
        }}
        pageTitle="Create New Villa"
        buttonText="Add Villa"
      />
    </div>
  )
}
