import { useState, useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { createVillaSchema } from '../schemas/createVillaSchema';


const useVilla = (uploadFunction, editVilla) => {
  const feauturedRef = useRef(null);
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
    formData.append('beds', values.beds);
    formData.append('baths', values.baths);
    formData.append('size', values.size);

    values.featured.forEach((image, index) => {
      formData.append(changeFeatured+`featured_image[${index}]`, image);
    });

    values.carousel.forEach((caroImage, index) => {
      formData.append(values.carouselRadio+`carousel_image[${index}]`, caroImage);
    });

    values.gallery.forEach((galImage, index) => {
      formData.append(values.galleryRadio+`gallery_image[${index}]`, galImage);
    });

    console.log(formData)

    // Flexible villaApi usage  << Instead of this get function from redux and invoke it
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
      title: '',
      price: '',
      description: '',
      beds: '',
      baths: '',
      size: '',
      featured: '',
      carousel: '',
      gallery: '',
      carouselRadio:"",
      galleryRadio:""
    },
    validationSchema: createVillaSchema(feauturedRef, carouselRef, galleryRef),
    onSubmit,
  });

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
    feauturedRef,
    carouselRef,
    galleryRef,
  };
};

export default useVilla;
