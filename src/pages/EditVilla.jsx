import useVilla from '../hooks/useVilla'
import { VillaUI } from '../components/VillaUI'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUpdateVillaMutation } from '../redux/features/villaApi';
import { useGetVillasQuery, useGetVillaBySlugQuery } from '../redux/features/villaApi';

export const EditVilla = () => {
  
    const { villaSlug } = useParams();
    const [editInitialValues, setEditInitialValues] = useState("");
    

    const [updateVilla] = useUpdateVillaMutation();

    const { data, refetch } = useGetVillasQuery();
    const { data:resp, refetch:villaSlugRefetch } = useGetVillaBySlugQuery(villaSlug);

    const handleRefetch = () => {
      refetch();
    };

    const handleUpdateVilla = async (myData)=>{
      const {data} = await updateVilla({slug:villaSlug, data: myData});

      // Update villas cards
      handleRefetch();
      return data;
    }

    useEffect(()=>{
      villaSlugRefetch();
    },[villaSlug])

    useEffect(()=>{
      setEditInitialValues(resp);
    },[resp])

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
