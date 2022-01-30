import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './views/home'
import GoogleAuth from './components/buttons/googleAuth'
import GoogleAuth2 from './components/buttons/googleAuth2'
import './App.css'
// import './main.css'

const App = () => {
    return (
        <Router>
            {/* <GoogleAuth2/> */}
           <Home/> 
        </Router>
        
    )
}

export default App
