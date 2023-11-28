import { useState, useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { createVillaSchema } from '../schemas/createVillaSchema';


const useVilla = (uploadFunction, editVilla, editInitialValues) => {
  const featuredRef = useRef(null);
  const carouselRef = useRef(null);
  const galleryRef = useRef(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const [changeFeatured, setChangeFeatured] = useState("");

  const checkIfEditPage = ()=>{
    if(editVilla == true){
      setChangeFeatured("replace_");
    }
  }


  useEffect(()=>{
    // checking if we are in edit villa page
    checkIfEditPage();
  },[])


  const onSubmit = async (values) => {

    const formData = new FormData();

    formData.append('title', values.title);
    formData.append('price', values.price);
    formData.append('description', values.description);
    formData.append('address', values.address);
    formData.append('beds', values.beds);
    formData.append('baths', values.baths);
    formData.append('size', values.size);
    formData.append('featured', values.featured);

    values.featured_image.forEach((image, index) => {
      formData.append(changeFeatured+`featured_image[${index}]`, image);
    });

    values.carousel.forEach((caroImage, index) => {
      formData.append(values.carouselRadio+`carousel_image[${index}]`, caroImage);
    });

    values.gallery.forEach((galImage, index) => {
      formData.append(values.galleryRadio+`gallery_image[${index}]`, galImage);
    });

    // Flexible villaApi usage  
    const response = await uploadFunction(formData);
    setUploadStatus(response);
  };

  

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
  } = useFormik({
    initialValues: {
      title: editInitialValues?.title || '',
      price: editInitialValues?.price || '',
      featured: editInitialValues?.featured || false,
      address: editInitialValues?.address || '',
      description: editInitialValues?.description || '',
      beds: editInitialValues?.beds || '',
      baths: editInitialValues?.baths || '',
      size: editInitialValues?.size || '',
      featured_image: '',
      carousel: '',
      gallery: '',
      carouselRadio: editInitialValues?.carouselRadio || '',
      galleryRadio: editInitialValues?.galleryRadio || '',
    },
    enableReinitialize: true, // This enables initialValues to be re-valuated
    validationSchema: createVillaSchema(featuredRef, carouselRef, galleryRef),
    onSubmit,
  });

  // console.log(values)

  return {
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
  };
};

export default useVilla;
