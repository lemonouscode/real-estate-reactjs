import { useState, useEffect } from "react";
import Lightbox from 'react-spring-lightbox';

export const GalleryGrid = ({villaDetails}) => {

  const [modifiedImages, setModifiedImages] = useState("");
  const [openLight, setOpenLight] = useState(false);

  const handleModifyImagesPath = ()=>{
    const newArray = villaDetails.gallery_images.map(obj => {
      const { img_path, ...rest } = obj; // Destructure img_path and the rest of the object
      return { ...rest, src: img_path }; // Return a new object with 'src' attribute
    });

    setModifiedImages(newArray)
  }


  useEffect(()=>{
    handleModifyImagesPath();
  },[])

  
  const [currentImageIndex, setCurrentIndex] = useState(0);

  const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
        currentImageIndex + 1 < modifiedImages.length &&
        setCurrentIndex(currentImageIndex + 1);

  return (
    <div>
        <div className="grid grid-cols-3 gap-4 max-[480px]:grid-cols-2">
          {villaDetails.gallery_images.map((image, index)=>(
            <img key={index} src={image.img_path} alt="" onClick={()=>setOpenLight(!openLight)} />
          ))}
        </div>

        <Lightbox
          isOpen={openLight}
          onPrev={gotoPrevious}
          onNext={gotoNext}
          images={modifiedImages}
          currentIndex={currentImageIndex}
          /* Add your own UI */
          // renderHeader={() => (<CustomHeader />)}
          // renderFooter={() => (<CustomFooter />)}
          // renderPrevButton={() => (<CustomLeftArrowButton />)}
          // renderNextButton={() => (<CustomRightArrowButton />)}
          // renderImageOverlay={() => (<ImageOverlayComponent >)}

          /* Add styling */
          // className="cool-class"
          // style={{ background: "grey" }}

          /* Handle closing */
          onClose={()=>setOpenLight(!openLight)}

          /* Use single or double click to zoom */
          // singleClickToZoom

          /* react-spring config for open/close animation */
          // pageTransitionConfig={{
          //   from: { transform: "scale(0.75)", opacity: 0 },
          //   enter: { transform: "scale(1)", opacity: 1 },
          //   leave: { transform: "scale(0.75)", opacity: 0 },
          //   config: { mass: 1, tension: 320, friction: 32 }
          // }}
        />
    </div>
  )
}
