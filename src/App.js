import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import Home from './views/home'
import HomeTest from './views/homeTest'
// import GoogleAuth from './components/buttons/googleAuth'
// import GoogleAuth2 from './components/buttons/googleAuth2'
// import GoogleAuth3 from './components/buttons/googleAuth3'
import './App.css'
// import './main.css'

const App = () => {
    return (
        <Router>
            {/* <GoogleAuth3/> */}
           <HomeTest/> 
        </Router>
        
    )
}

export default App
