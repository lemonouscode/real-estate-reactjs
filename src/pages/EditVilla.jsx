import useVilla from '../hooks/useVilla'
import { VillaUI } from '../components/VillaUI'
import { useParams } from 'react-router-dom';
import villaApi from '../services/VillaApi';
import { useEffect, useState } from 'react';

export const EditVilla = () => {

    const { villaSlug } = useParams();
    const [editInitialValues, setEditInitialValues] = useState("");

    const handleUpdateVilla = async (data)=>{
      return await villaApi.updateVilla(villaSlug, data)
    }

    const handleInitialValues = async ()=>{
      const resp = await villaApi.getVillaByName(villaSlug);
      setEditInitialValues(resp);
    }

    useEffect(()=>{
      handleInitialValues();
    },[])

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
        featuredRef,
        carouselRef,
        galleryRef,
    } = useVilla(handleUpdateVilla, true, editInitialValues);  // Here goes second param to true to specify we are using hook for edit villa page


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
          featuredRef,
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
