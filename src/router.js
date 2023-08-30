import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import CategorizedAnimal from './pages/CategorizedAnimal'
import PetProfilePage from './pages/petProfilePage'
import Facts from './Components/Facts'
import AboutUs from './Components/AboutUs'

const router = () => {
  return (
    <Routes>
        <Route path='/'>
            <Route index element={<Homepage/>} />
            <Route path=":category">
              <Route index element={<CategorizedAnimal/>} />
              <Route index={false} path=":id" element={<PetProfilePage />} />
            </Route>
            <Route index={false} path="/Facts" element={<Facts/>}/>
            <Route index={false} path="/AboutUs" element={<AboutUs/>}/>
        </Route>
    </Routes>
  )
}

export default router
