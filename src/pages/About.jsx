import { HeroUI } from '../components/HeroUI';
import aboutImg from "../assets/Images/aboutImg.jpg"
import ab1 from "../assets/Images/ab1.jpg"
import ab2 from "../assets/Images/ab2.jpg"
import ab3 from "../assets/Images/ab3.jpg"
import { MyButton } from '../components/MyButton';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div>
        <HeroUI imageUrl={aboutImg} title="About us" subTitle="Find Your Dream Home Today" />

        <section className='mt-5 pl-[5%] max-[1100px]:px-[5%]'>
            <div className='flex justify-center items-center gap-8 text-white max-[1100px]:flex-col-reverse pt-20'>
                <div className='w-[30%] max-[1100px]:w-full'>
                    <p>FUNCTIONAL & AFFORDABLE</p>
                    <h2 className='text-5xl my-3 uppercase'>Apartments</h2>
                    <p className='pt-2 mb-5'>Cras elit tortor, viverra eget interdum at, posuere at sapien. Integer in sodales tellus. Vestibulum lorem diam, efficitur sit amet nibh tempus, fringilla lobortis elit. Nunc at varius est. Nam ante risus, laoreet nec facilisis et, accumsan vel leo. Duis eu neque ullamcorper nisi ultrices aliquet at vel purus.</p>
                    <Link to="/villas">
                        <MyButton buttonText="View Villas" />
                    </Link>
                </div>
                <div className='w-[70%] max-[1100px]:w-full'>
                    <img src={ab1} 
                        alt=""
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                     />
                </div>
            </div>
        </section>
        <section className='mt-[75px] pr-[5%] max-[1100px]:px-[5%]'>
            <div className='flex justify-center items-center gap-8 text-white max-[1100px]:flex-col'>
                <div className='w-[70%] max-[1100px]:w-full'>
                    <img src={ab2} 
                        alt=""
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </div>
                <div className='w-[30%] max-[1100px]:w-full'>
                    <p>INTIMATE AND GUEST FRIENDLY</p>
                    <h2 className='text-5xl my-3 uppercase'>Villas</h2>
                    <p className='pt-2 mb-5'>Cras elit tortor, viverra eget interdum at, posuere at sapien. Integer in sodales tellus. Vestibulum lorem diam, efficitur sit amet nibh tempus, fringilla lobortis elit. Nunc at varius est. Nam ante risus, laoreet nec facilisis et, accumsan vel leo. Duis eu neque ullamcorper nisi ultrices aliquet at vel purus.</p>
                    <Link to="/villas">
                        <MyButton buttonText="View Villas" />
                    </Link>
                </div>
            </div>
        </section>
        <section className='mt-[75px] pl-[5%] max-[1100px]:px-[5%] pb-20'>
            <div className='flex justify-center items-center gap-8 text-white max-[1100px]:flex-col-reverse'>
                <div className='w-[30%] max-[1100px]:w-full'>
                    <p>SPACIOUS AND LUXURIOUS</p>
                    <h2 className='text-5xl my-3 uppercase'>Family Villas</h2>
                    <p className='pt-2 mb-5'>Cras elit tortor, viverra eget interdum at, posuere at sapien. Integer in sodales tellus. Vestibulum lorem diam, efficitur sit amet nibh tempus, fringilla lobortis elit. Nunc at varius est. Nam ante risus, laoreet nec facilisis et, accumsan vel leo. Duis eu neque ullamcorper nisi ultrices aliquet at vel purus.</p>
                    <Link to="/villas">
                        <MyButton buttonText="View Villas" />
                    </Link>
                </div>
                <div className='w-[70%] max-[1100px]:w-full'>
                    <img src={ab3} 
                        alt=""
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                     />
                </div>
            </div>
        </section>
    </div>
  )
}
