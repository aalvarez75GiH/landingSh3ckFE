import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './views/home'
import EmilioApp from './components/mremilio/emilio_app'
// import CitiesSection from './components/checkApp/citiesSection'
// import CheckersSection from './components/checkApp/checkersSection'
// import ContactSection from './components/contactSection/contactSection'
// import CheckStarting from './components/checkApp/checkStarting'
import './sh3ck.css'

const App = () => {
    
    return (
        <Router>
            {/* <EmilioApp/> */}
            <Home/>
            <Routes>
                {/* <Route path="/" exact={true} element={<Home />}/> */}
                {/* <Route path="/checkStarting" exact={true} element={<CheckStarting />}/>
                <Route path="/citiesSection"  element={<CitiesSection />}/>
                <Route path="/checkersSection"  element={<CheckersSection />}/>  */}
            </Routes>
        </Router>
    )
}

export default App
