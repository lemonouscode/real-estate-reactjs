

export const VillaUI = ({ formData, pageTitle ,buttonText, children }) => {

  const { values, errors, touched, isSubmitting, isValid, handleBlur, handleChange, handleSubmit, setFieldValue, uploadStatus, featuredRef, carouselRef, galleryRef } = formData;
  

  return (
    <div className='py-20 flex flex-col gap-5'>
      <h1 className='text-5xl mx-auto mb-5'>{pageTitle}</h1>
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
          ref={featuredRef}
          accept="image/png, image/jpeg"
          type="file" 
          onChange={(e) => {
            setFieldValue('featured', Array.from(e.target.files));  //setFieldValue can only be accessed when triggred onSubmit
          }}
        />
        {errors.featured && <p className="text-red-800">{errors.featured}</p> }
        <h3 className='text-xl mt-5'>Villa Carousel Images</h3>
        {children && 
          <div className='flex gap-5 mb-3'>
            {children[0]}
          </div>
        }
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
        <h3 className='text-xl mt-5'>Villa Gallery Images</h3>
        {children && 
          <div className='flex gap-5 mb-3'>
            {children[1]}
          </div>
        }
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
        <button disabled={isSubmitting || !isValid} type='submit' className='border border-blue-400 mt-5'>{buttonText}</button>

      </form>
    </div>
  )
}
