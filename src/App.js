import React from 'react'
import Home from './views/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import CitiesSection from './components/checkApp/citiesSection'
// import CheckersSection from './components/checkApp/checkersSection'
// import CheckStarting from './components/checkApp/checkStarting'

import './sh3ck.css'

const App = () => {
    
    return (
        <Router>
            <Home/>
            {/* <Routes>
                <Route path="/" exact={true} element={<Home />}/> 
                <Route path="/startingPoint"  element={<CheckStarting  />}/>
                <Route path="/firstStep"  element={<CitiesSection  />}/>
                <Route path="/secondStep" element={<CheckersSection />}/>
                
            </Routes> */}
        </Router>
    )
}

export default App
