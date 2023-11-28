import { useVillas } from '../hooks/useVillas'
import { VillasUI } from '../components/VillasUI'


export const Villas = () => {


  const {villas, handleRemoveVilla} = useVillas();

  
  return (
    <div>
      <VillasUI 
        villas={villas} 
        handleRemoveVilla={handleRemoveVilla}
      />
    </div>
  )
}
