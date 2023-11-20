import useVilla from '../hooks/useVilla'
import { VillaUI } from '../components/VillaUI'
import { useParams } from 'react-router-dom';
import villaApi from '../services/VillaApi';

export const EditVilla = () => {

    const { villaSlug } = useParams();

    const handleUpdateVilla = async (data)=>{
      return await villaApi.updateVilla(villaSlug, data)
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
    } = useVilla(handleUpdateVilla, true);  // Here goes second param to true to specify we are using hook for edit villa page


    const EditVillaRadio = ({fieldName})=>{
        return (
          <div className='flex gap-5 mb-3'>
            <div className='flex gap-5 mb-3'>
              <label>
                <input
                  type="radio"
                  name={fieldName}
                  value=""
                  checked={values[fieldName] === ""}
                  onChange={() => setFieldValue(fieldName, "")}
                />
                Add New Images
              </label>
              <label>
                  <input
                    type="radio"
                    name={fieldName}
                    value="replace_"
                    checked={values[fieldName] === "replace_"}
                    onChange={() => setFieldValue(fieldName, "replace_")}
                  />
                Replace Images
              </label>
            </div>
          </div>
      );
    }


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
        pageTitle="Edit Villa"
        buttonText="Save Villa"
        >
          <EditVillaRadio
            fieldName="carouselRadio"
          />
          <EditVillaRadio
            fieldName="galleryRadio"
          />
        </VillaUI>
    </div>
  )
}
