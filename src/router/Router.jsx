import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { CreateVilla } from "../Pages/CreateVilla"
import { EditVilla } from "../pages/EditVilla"
import { Villas } from "../pages/Villas"
import { About } from "../pages/About"
import { SingleVilla } from "../pages/SingleVilla"
import { Contact } from "../pages/Contact"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { AdminProtectedRoute } from "./AdminProtectedRoute"
import { UserProtectedRoute } from "./UserProtectedRoute"

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="villas" element={<Villas/>} />
        
        <Route path="villas/:villaSlug" element={<SingleVilla/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        
        <Route element={<AdminProtectedRoute redirectPath="/login" noAdminRedirectPath="/" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-villa" element={<CreateVilla/>}/>
          <Route path="/edit-villa/:villaSlug" element={<EditVilla />} />
        </Route>

        <Route element={<UserProtectedRoute />}>
          
        </Route>

      </Routes>
    </div>
  )
}
