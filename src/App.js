import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/home'
import CheckSection from './components/checkSection/checkSection'
import './sh3ck.css'

const App = () => {
    
    return (
     <Router>
         <Routes>
             <Route path="/" exact element={<Home/>}/>
             {/* <Route path="/app" element={<CheckSection/>}> */}
                {/* <Home/>  */}

             {/* </Route> */}

         </Routes>
    </Router>
        
    )
}

export default App
