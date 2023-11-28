import { useHome } from '../hooks/useHome'
import { HomeUI } from '../components/HomeUI'

export const Home = () => {

  const {featuredVillas} = useHome();
  
  return (
    <HomeUI
      featuredVillas = {featuredVillas}
    />
  )
}
