import { useVillas } from '../hooks/useVillas'
import { VillasUI } from '../components/VillasUI'
import { selectIsAdmin } from "../redux/authSlice";
import { useSelector } from "react-redux";

export const Villas = () => {

  const isAdmin = useSelector(selectIsAdmin);

  const {villas, handleRemoveVilla} = useVillas();

  return (
    <div>
      <VillasUI 
        villas={villas} 
        handleRemoveVilla={handleRemoveVilla}
        isAdmin={isAdmin}
      />
    </div>
  )
}
