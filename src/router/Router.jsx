import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { CreateVilla } from "../Pages/CreateVilla"
import { EditVilla } from "../pages/EditVilla"
import { Villas } from "../pages/Villas"
import { About } from "../pages/About"
import { SingleVilla } from "../pages/SingleVilla"

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/create-villa" element={<CreateVilla/>}/>
        <Route path="/edit-villa/:villaSlug" element={<EditVilla />} />
        <Route path="villas" element={<Villas/>} />
        <Route path="about" element={<About/>} />
        <Route path="villas/:villaSlug" element={<SingleVilla/>} />
      </Routes>
    </div>
  )
}
