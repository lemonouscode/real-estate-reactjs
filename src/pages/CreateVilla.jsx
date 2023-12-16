import useVilla from '../hooks/useVilla';
import { VillaUI } from '../components/VillaUI';
import { useCreateVillaMutation } from '../redux/features/villaApi';

export const CreateVilla = () => {

  const [createVilla] = useCreateVillaMutation();

  const handleUpdateVilla = async (myData)=>{
    const {data} = await createVilla(myData)
    return data;
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
    <section className=''>
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
    </section>
  )
}
