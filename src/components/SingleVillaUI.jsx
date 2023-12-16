import { SyncedCarousel } from "../components/SyncedCarousel";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { MyButton } from "../components/MyButton";
import { GalleryGrid } from "../components/GalleryGrid";
import { ContactForm } from "../components/ContactForm"


export const SingleVillaUI = ({
  villaDetails,
  contactSectionRef,
  scrollToContactSection,
  displayTextWithLineBreaks, 
  formData, 
  handleSaveVilla, 
  savedVilla,
  isAdmin
}) => {
    return (
        <div className="overflow-x-hidden text-white">
            <section className="">
                {Object.keys(villaDetails).length > 0 &&
                    <SyncedCarousel villaDetails={villaDetails} />
                }
            </section>
            <section className="pt-[50px] flex flex-col gap-5 w-full h-full justify-center items-center">
                <h1 className="text-6xl font-bold max-md:text-4xl">{villaDetails.title}</h1>
                <p className="text-2xl uppercase">{villaDetails.address}</p>
                <div className="flex gap-3">    
                    <div className='flex w-full gap-5 px-[5%] mb-3 '>
                      <div className='flex items-center gap-2'>
                          <p className='z-10 text-xl'>{villaDetails.beds}</p>
                          <FaBed className='z-10 text-2xl mt-1 ' />
                      </div>
                      
                      <div className='flex items-center gap-2'>
                          <p className='z-10 text-xl'>{villaDetails.baths}</p>
                          <FaShower className='z-10 text-2xl mt-1 ' />
                      </div>
                      <div className='flex items-center gap-2'>
                          <p className='z-10 text-xl'>{villaDetails.size}</p>
                          <p className='z-10 text-xl mb-1 '>m²</p>
                      </div>
                    </div>
    
                </div>
                <div className="max-w-2xl mb-5 text-center">{villaDetails && displayTextWithLineBreaks()}</div>
    
                <div className="flex gap-5 mb-10 max-[480px]:flex flex-col">
                  <button onClick={scrollToContactSection}>
                    <MyButton buttonText="Contact Us" />
                  </button>
                  {!savedVilla && !isAdmin &&
                    <button onClick={handleSaveVilla}>
                      <MyButton buttonText="Save Villa" />
                    </button>
                  }
                </div>
                <p className="text-green-600 text-3xl pb-5">{savedVilla}</p>
                <div className="w-full">
                    <iframe src={`https://www.google.com/maps/embed/v1/place?q=${villaDetails.address}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}  
                      height="450" 
                      style={{border:0, width:"100%"}} 
                      allowFullScreen="" 
                      aria-hidden="false" 
                      >
                    </iframe>
                </div>
            </section>
    
            <section ref={contactSectionRef} className="pt-[60px] px-[5%]">
              <div className="flex flex-col max-w-[800px] mx-auto gap-5 mb-5">
                <h2 className="text-4xl uppercase mx-auto max-md:text-3xl">Contact Us</h2>
                <p className="text-xl text-center max-md:text-base">We would love to hear from you and help you find your dream property. Please fill the form below and one of our agents will connect with you shortly.</p>
              </div>
              <ContactForm formData={formData} />
            </section>
    
            <section className="pt-[60px] pb-10">
            {Object.keys(villaDetails).length > 0 &&
                <GalleryGrid villaDetails={villaDetails} />
            }
            </section>
        </div>
      )
}
