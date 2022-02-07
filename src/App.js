import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import Home from './views/home'
import HomeTest from './views/homeTest'
import HomeTest2 from './views/homeTest2'
// import GoogleAuth from './components/buttons/googleAuth'
// import GoogleAuth2 from './components/buttons/googleAuth2'
// import GoogleAuth3 from './components/buttons/googleAuth3'
// import GoogleAuth4 from './components/buttons/googleAuth4'
import './App.css'
// import './main.css'

const App = () => {
    return (
        <Router>
            {/* <GoogleAuth/> */}
           <HomeTest2/> 
        </Router>
        
    )
}

export default App
