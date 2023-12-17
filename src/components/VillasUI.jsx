import { HeroUI } from '../components/HeroUI';
import propertyImage from "../assets/Images/property1.jpeg"
import { VillasDetail } from '../components/VillasDetail';
import { Link } from 'react-router-dom';

export const VillasUI = ({villas, handleRemoveVilla, isAdmin}) => {
    
    return (
        <div className=' flex flex-col gap-5'>
            <HeroUI imageUrl={propertyImage} 
                title="Featured Properties" 
                subTitle=" Browse our exclusive listings and find your next dream home today!" 
            />
            <div className='overflow-hidden grid grid-cols-3 gap-4 max-[1320px]:grid-cols-2 max-[880px]:grid-cols-1'>
                {villas && villas.map((villa) => (
                    <div key={villa.id}>
                        <div className='flex relative h-[40vh] w-full' to={villa.slug}>
                            <div className="w-full h-full absolute" style={{
                                    backgroundImage: `url('${villa.featured_image}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                            </div>
                            <VillasDetail villa={villa} urlPrefix="/villas/" />
                        </div>
                        {isAdmin == 1 &&
                            <div className='flex gap-5 mt-5 max-[480px]:pl-2'>
                                <Link className='text-white px-5 py-2 border border-white' to={`/edit-villa/${villa.slug}`}>
                                    Edit Villa
                                </Link>
                                <button className='text-white px-5 py-2 border border-white' onClick={() => handleRemoveVilla(villa.slug)}>
                                    Remove Villa
                                </button>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
      )
}
