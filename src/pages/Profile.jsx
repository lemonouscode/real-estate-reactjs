import { ProfileUI } from "../components/ProfileUI";
import { useProfile } from "../hooks/useProfile";

export const Profile = () => {

  const {name, userDetails, handleUnsaveVilla} = useProfile();

  return (
    <section className='pt-[75px] px-[5%] text-white min-h-screen'>
        <ProfileUI name={name} userDetails={userDetails} handleUnsaveVilla={handleUnsaveVilla} />
    </section>
  )
}
