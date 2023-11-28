import { MyButton } from "./MyButton"

export const ContactForm = () => {
  return (
    <div>
        <form className='flex flex-col w-full max-w-[800px] mx-auto gap-3'>
            <label className='flex flex-col'>
                Name
                <input type="text" />
            </label>
            <label className='flex flex-col'>
                Phone
                <input type="text" />
            </label>
            <label className='flex flex-col'>
                Email
                <input type="email" />
            </label>
            <label className='flex flex-col'>
                Message
                <textarea 
                    type="text" 
                    rows={10}
                    cols={40}
                    id='Message'
                />
            </label>

            <MyButton buttonText="Submit" />
        </form>
    </div>
  )
}
