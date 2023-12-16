import { VillasDetail } from "./VillasDetail"
import { MyButton } from "./MyButton"

export const ProfileUI = ({name, userDetails, handleUnsaveVilla}) => {
  return (
    <div>
        <h1 className="text-5xl mt-5 mb-10 font-bold max-md:text-4xl">Welcome <span className="text-amber-700">{name}</span></h1>
        <p className="text-2xl mb-5">Your Saved Villas:</p>

        <div className='overflow-hidden grid grid-cols-3 gap-4 max-[1420px]:grid-cols-2 max-[992px]:grid-cols-1'>
        {userDetails &&
            userDetails.saved_villas.map((villa, index)=>(
                <div key={index}>
                    <div className='flex relative h-[40vh] w-full' to={villa.villa.slug}>
                        <div className="w-full h-full absolute" style={{
                                backgroundImage: `url('${villa.villa.featured_image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}>
                        </div>
                        <VillasDetail villa={villa.villa} urlPrefix="/villas/" />
                    </div>

                    <button className="mt-5" onClick={()=> handleUnsaveVilla(villa.id)}>
                        <MyButton buttonText="Unsave" />
                    </button>
                </div>
            ))
        }
        
        </div>
    </div>
  )
}
