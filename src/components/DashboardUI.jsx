import { Link } from "react-router-dom";
import { MyButton } from "../components/MyButton";

export const DashboardUI = ({contacts}) => {
  return (
    <div>
        <h1 className='text-white text-4xl py-5'>Admin Dashboard</h1>   
        <div className="flex gap-5 mt-5 max-md:flex-col">
            <Link to="/create-villa">
                <MyButton buttonText="Create Villa"/>
            </Link>
            <Link to="/villas">
                <MyButton buttonText="Edit Villas"/>
            </Link>
        </div>

        <h2 className="text-white text-2xl pt-10 pb-5">Submited Contact Forms</h2>
        {contacts && contacts.map((contact)=>(
        <div key={contact.id} className="flex flex-col gap-1 text-white mb-10 border-b border-white">
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Message: {contact.message}</p>
        </div>
        ))}
    </div>
  )
}
