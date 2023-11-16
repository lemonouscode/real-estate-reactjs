import axios from 'axios';
import { useFormik } from 'formik';
import { createVillaSchema } from '../schemas/createVillaSchema';
import { useState, useEffect,useRef } from 'react';
import villaApi from '../services/VillaApi';

export const CreateVilla = () => {

  const feauturedRef = useRef(null);
  const carouselRef = useRef(null);
  const galleryRef = useRef(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const onSubmit = async ()=>{
    
    const formData = new FormData();

    formData.append('title', values.title);
    formData.append('price', values.price);
    formData.append('description', values.description);
    formData.append('beds', values.beds);
    formData.append('baths', values.baths);
    formData.append('size', values.size);

    values.featured.forEach((image, index) => {
      formData.append(`featured_image[${index}]`, image);
    });

    values.carousel.forEach((caroImage, index)=>{
      formData.append(`carousel_image[${index}]`, caroImage);
    })

    values.gallery.forEach((galImage, index)=>{
      formData.append(`gallery_image[${index}]`, galImage);
    })

    const response = await villaApi.createVilla(formData);
    setUploadStatus(response)

  }

  const {values, errors, touched, isSubmitting,isValid , handleBlur, handleChange, handleSubmit, setFieldValue} = useFormik({
    initialValues:{
      title:"",
      price:"",
      description:"",
      beds:"",
      baths:"",
      size:"",
      featured: "",
      carousel: "",
      gallery: ""
    },
    validationSchema:createVillaSchema(feauturedRef, carouselRef, galleryRef),
    onSubmit
  })

  

  return (
    <div className='py-20 flex flex-col gap-5'>
      <h1>Create villa</h1>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-md mx-auto gap-3'>
        <h3 className='text-xl'>Title</h3>
        <input 
          type="text" 
          id='title'
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}  
        />
        {errors.title && touched.title && <p className="text-red-800">{errors.title}</p> }
        <h3 className='text-xl'>Price</h3>
        <input 
          type="text" 
          id='price'
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}  
        />
        {errors.price && touched.price && <p className="text-red-800">{errors.price}</p> }
        <h3 className='text-xl'>Description</h3>
        <textarea 
          type="text" 
          id='description'
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}  
        />
        {errors.description && touched.description && <p className="text-red-800">{errors.description}</p> }
        <h3 className='text-xl'>Number Of Beds</h3>
        <input 
          type="text" 
          id='beds'
          value={values.beds}
          onChange={handleChange}
          onBlur={handleBlur}  
        />
        {errors.beds && touched.beds && <p className="text-red-800">{errors.beds}</p> }
        <h3 className='text-xl'>Number Of Baths</h3>
        <input 
          type="text" 
          id='baths'
          value={values.baths}
          onChange={handleChange}
          onBlur={handleBlur}  
        />
        {errors.baths && touched.baths && <p className="text-red-800">{errors.baths}</p> }
        <h3 className='text-xl'>Size Of The Villa</h3>
        <input 
          type="text" 
          id='size'
          value={values.size}
          onChange={handleChange}
          onBlur={handleBlur}  
        />
        {errors.size && touched.size && <p className="text-red-800">{errors.size}</p> }
        <h3 className='text-xl'>Featured Image</h3>
        <input 
          id='featured'
          ref={feauturedRef}
          accept="image/png, image/jpeg"
          type="file" 
          onChange={(e) => {
            setFieldValue('featured', Array.from(e.target.files));  //setFieldValue can only be accessed when triggred onSubmit
          }}
        />
        {errors.featured && <p className="text-red-800">{errors.featured}</p> }
        <h3 className='text-xl'>Villa Carousel Images</h3>
        <input 
          id='carousel'
          ref={carouselRef}
          type="file" 
          accept="image/png, image/jpeg"
          multiple 
          onChange={(e) => {
            setFieldValue('carousel', Array.from(e.target.files));
          }}
        />
        {errors.carousel && <p className="text-red-800">{errors.carousel}</p> }
        <h3 className='text-xl'>Villa Gallery Images</h3>
        <input 
          id='gallery'
          ref={galleryRef}
          type="file" 
          accept="image/png, image/jpeg"
          multiple 
          onChange={(e) => {
            setFieldValue('gallery', Array.from(e.target.files));
          }}
        />
        {errors.gallery && <p className="text-red-800">{errors.gallery}</p> }
        {uploadStatus && <h3 className='text-lime-600'>{uploadStatus}</h3>}
        <button disabled={isSubmitting || !isValid} type='submit' className='border border-blue-400 mt-5'>Add Villa</button>

      </form>
    </div>
  )
}
