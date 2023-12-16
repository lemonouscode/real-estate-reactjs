import React from 'react'

export const HeroUI = ({imageUrl , title, subTitle}) => {
  return (
    <div className='relative flex h-[50vh] overflow-hidden justify-center items-center px-[5%]'>
        <div className=' bg-black opacity-60 w-full h-full absolute z-10'></div>
        <div className="w-full h-full absolute" style={{
                backgroundImage: `url('${imageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
        </div>
        <div className='flex flex-col z-10 text-white text-center gap-3'>
            <h1 className='text-6xl font-bold max-md:text-4xl'>{title}</h1>
            <p className=''>{subTitle}</p>
        </div>
    </div>
  )
}
