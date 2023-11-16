import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { CreateVilla } from "../Pages/CreateVilla"


export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/create-villa" element={<CreateVilla/>}/>
      </Routes>
    </div>
  )
}
