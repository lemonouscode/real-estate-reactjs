import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { CreateVilla } from "../Pages/CreateVilla"
import { EditVilla } from "../pages/EditVilla"
import { Villas } from "../pages/Villas"

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/create-villa" element={<CreateVilla/>}/>
        <Route path="/edit-villa/:villaSlug" element={<EditVilla />} />
        <Route path="villas" element={<Villas/>} />
      </Routes>
    </div>
  )
}
