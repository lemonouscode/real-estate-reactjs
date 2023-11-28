import React from 'react'

export const MyButton = ({buttonText, black}) => {
  const buttonClasses = `max-w-[200px] text-center border border-white ${black ? 'text-black border-black bg-transparent hover:text-white hover:bg-black' : 'text-white bg-transparent hover:text-myBrown hover:bg-white'} transition-all duration-300 cursor-pointer uppercase px-8 py-4`;

  return (
    <div className={buttonClasses}>
      {buttonText}
    </div>
  );
}
