import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import AllRoutes from './AllRoute'
import { Routes, Route } from 'react-router-dom'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'

const App = () => {
    return (
            <>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<AllRoutes />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/gallery' element={<Gallery />} />
            </Routes>
            </>
    )
}

export default App