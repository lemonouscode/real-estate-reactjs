import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { Link } from "react-router-dom";

export const VillasDetail = ({villa, cutUrl}) => {

  return (
    <div className='flex flex-col w-full text-white absolute bottom-0 gap-2'>
        <div className=' bg-black opacity-60 w-full h-full absolute'></div>
        <div className="absolute bottom-2 right-[5%]">
        <Link to={cutUrl ? villa.slug : `villas/${villa.slug}`}>
            <div className='
            border border-white text-white cursor-pointer uppercase px-4 py-2 bg-transparent
            hover:text-myBrown hover:bg-white transition-all duration-300 
            '>Details
            </div>
        </Link>
        </div>
        <div className='flex justify-between w-full gap-5 px-[5%] mt-3'>
            <p className='z-10 text-3xl'>{villa.title}</p>
            <p className='z-10 text-2xl'>${villa.price}</p>
        </div>
        <div className='flex w-full gap-5 px-[5%] mb-3 '>
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
  )
}
