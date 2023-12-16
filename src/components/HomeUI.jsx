import { Link } from 'react-router-dom'
import { VillasDetail } from '../components/VillasDetail'
import { MyButton } from '../components/MyButton'
import HeroBgVideo from "../assets/Videos/HeroBgVideo.mp4"
import founderBg from "../assets/Images/abImg.png"
import dreamBg from "../assets//Images/qwe.jpg"
import { SimpleCarousel } from '../components/SimpleCarousel'

export const HomeUI = ({featuredVillas}) => {
    return (
        <div className='flex flex-col gap-5 bg-black'>
            <section className='flex flex-col relative h-screen overflow-hidden'>
                <div className=' bg-black opacity-30 w-full h-full absolute z-10'></div>
                <video className='videoTag absolute left-0 w-full h-full object-cover' autoPlay loop muted>
                    <source src={HeroBgVideo} type='video/mp4' />
                </video>
                <div className='flex flex-col z-20 justify-center items-center h-full gap-3 text-white px-[5%] text-center'>
                    <p className='text-xl uppercase'>Local connections global reach</p>
                    <h1 className='text-6xl uppercase font-bold max-md:text-4xl'>The Lorem Ipsum team</h1>
                    <p className='text-xl mt-2 mb-2'>Ranked #1 Team in Jupiter servicing homes from Jupiter Island - Palm Beach Island, FL</p>
                    <Link to="/villas">
                        <MyButton buttonText="View Villas" />
                    </Link>
                </div>
            </section>
            {featuredVillas.length > 0 &&
            <section className='relative'>
                <h2 className='text-4xl text-white uppercase text-center absolute left-1/2 transform -translate-x-1/2 z-10 mt-5'>Featured Properties</h2>
                <div className="w-full h-full overflow-hidden">
                    <SimpleCarousel>
                    {featuredVillas.map((villa) => (
                        <div key={villa.id} className='h-screen relative'>
                            <img
                                src={villa.featured_image}
                                alt=""
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />

                            <VillasDetail villa={villa} urlPrefix="/villas/" />
                        </div>
                        
                        ))}
                    </SimpleCarousel>
                </div>
            </section>
            }
            <section className='flex flex-col relative h-screen overflow-hidden'>
                <div className="w-full h-full absolute" 
                    style={{
                        backgroundImage: `url('${founderBg}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                </div>
                <div className='flex flex-col z-20 justify-center items-center gap-3 h-full text-white px-[5%] text-center'>
                    <p className='text-xl uppercase max-md:text-base'>About Lorem Ipsum</p>
                    <h2 className='text-6xl uppercase max-md:text-4xl'>The founder</h2>
                    <p className='text-xl mt-2 mb-2 max-md:text-base'>John Doe is the founder of the Lorem Ipsum team. John has 20+ years of experience
                    </p>
                    <p className='text-xl mb-2 max-md:text-base'>in Luxury & Waterfront Properties spanning from Jupiter Island - Palm Beach Island, FL</p>
                    <Link to="/villas">
                        <MyButton buttonText="View Villas" />
                    </Link>
                </div>
            </section>
            <section className='flex flex-col relative h-screen overflow-hidden'>
                <div className=' bg-black opacity-30 w-full h-full absolute z-10'></div>
                <div className="w-full h-full absolute" 
                    style={{
                        backgroundImage: `url('${dreamBg}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                </div>
                <div className='flex flex-col z-20 justify-center items-center gap-3 h-full text-white px-[5%]'>
                    <p className='text-xl uppercase max-md:text-base'>LOCAL CONNECTIONS. GLOBAL REACH</p>
                    <h2 className='text-6xl uppercase text-center max-md:text-4xl'>FIND YOUR DREAM HOME</h2>
                    <p className='text-xl mt-2 mb-2 text-center max-md:text-base'>Whether you're looking to buy a home or sell your home, the Lorem Ipsum Team is the #1 leader in marketing,
                    </p>
                    <p className='text-xl mb-2 text-center max-md:text-base'>technology, and client care. Our team defines what it means to specialize in “luxury” real estate.</p>
                    <Link to="/villas">
                    <MyButton buttonText="View Villas" />
                    </Link>
                    
                </div>
            </section>
        </div>
    )
}
