import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import VillaApi from "../services/VillaApi"
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { HeroUI } from '../components/HeroUI';
import propertyImage from "../assets/Images/property1.jpeg"


export const Villas = () => {

  const [villas, setVillas] = useState([]);

  useEffect(() => {
    const fetchVillas = async () => {
      const { villas } = await VillaApi.getVillas();
      setVillas(villas);
    };
    fetchVillas();

  }, []);

  
  return (
    <div className='py-20 flex flex-col gap-5'>
        <HeroUI imageUrl={propertyImage} 
            title="FEATURED PROPERTIES" 
            subTitle=" Browse our exclusive listings and find your next dream home today!" 
        />
        <div className='overflow-hidden grid grid-cols-3 gap-4'>
            {villas && villas.map((villa) => (
                <div key={villa.id}>
                    <Link className='flex relative h-[40vh] w-full' to={villa.slug}>
                        <div className="w-full h-full absolute" style={{
                                backgroundImage: `url('${villa.featured_image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}>
                        </div>
                        <div className='flex flex-col w-full text-white absolute bottom-0 gap-2'>
                            <div className=' bg-black opacity-60 w-full h-full absolute'></div>
                            <div className='flex justify-between w-full gap-5 px-5 mt-3'>
                                <p className='z-10 text-3xl'>{villa.title}</p>
                                <p className='z-10 text-2xl'>${villa.price}</p>
                            </div>
                            <div className='flex w-full gap-5 px-5 mb-3 '>
                                <div className='flex items-center gap-2'>
                                    <p className='z-10 text-xl'>{villa.beds}</p>
                                    <FaBed className='z-10 text-2xl mt-1 ' />
                                </div>
                                <div className='h-7 w-[2px] bg-white'></div>
                                <div className='flex items-center gap-2'>
                                    <p className='z-10 text-xl'>{villa.baths}</p>
                                    <FaShower className='z-10 text-2xl mt-1 ' />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <p className='z-10 text-xl'>{villa.size}</p>
                                    <p className='z-10 text-2xl mt-1 '>m²</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/edit-villa/${villa.slug}`}>
                        Edit
                    </Link>
                    
                </div>
                
                
            ))}
        </div>
    </div>
  )
}
