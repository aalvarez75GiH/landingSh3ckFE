import React, { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
// import '../../bookface.css'


const Dashboard = () => {

  const auth = window.gapi.auth2.getAuthInstance()
  const user = auth.currentUser.get()
  const profile = user.getBasicProfile()
  const email = profile.getEmail()
  const imageUrl = profile.getImageUrl()

  return (
    <>
      <nav>
        <div>Bookface</div>
        <img className="push" src={imageUrl} alt="cdcdcdc"/>
        <Dropdown>
          <Dropdown.Toggle as="a">
            {email}
          </Dropdown.Toggle>
          <Dropdown.Menu>
              <Dropdown.Item
              onClick={auth.signOut}
              >Sign out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
      <div className="container">
        <p>Look at this bookface</p>
        <img src="https://christianlauersen.files.wordpress.com/2015/11/img_0423.png" alt="Christian" />
      </div>
    </>  
  )

}

const LoginPage = ({isSignedIn}) => {

  useEffect(()=> {
    window.gapi.load('signin2',() =>{
      window.gapi.signin2.render('login-button')
    })
  },[])

  return (
    <div className="container">
      <div id="login-button"></div>
    </div>
  )
}

const LandingPage = () => {
  return (
      <div className="container">
          <h1>BookFace</h1>
          <p>Leading provider of bookfaces</p>
          <Link to="/dashboard">Go to Dashboard</Link>
      </div>
  )
}

const Application = () => {

  useEffect(()=> {
    insertGapiScript()
  },[])
  
  const [isSignedIn, setIsSignedIn ] = useState(null)
  
  const insertGapiScript = () => {
    const script = document.createElement('script')
    script.src = "https://apis.google.com/js/platform.js"
    script.onload = () => {
        initializeGooglesignIn()
    }
    document.body.appendChild(script)
  } 

const initializeGooglesignIn = () => {
  window.gapi.load('client:auth2', () => {
    window.gapi.client.init({
      client_id: '915460618193-dcl1a1f3en6f3h22evu9jqk2aqdh1lcj.apps.googleusercontent.com',
      scope:'profile'
    }).then(()=> {
      console.log('gapi initialized...')
      const auth = window.gapi.auth2.getAuthInstance()
      const isSignedIn = auth.isSignedIn.get()
      setIsSignedIn(isSignedIn)
      console.log(isSignedIn)
      auth.isSignedIn.listen(isSignedIn => {
        setIsSignedIn(isSignedIn)
      })
    })
})
}


  const ifUserSignedIn = (Component) => {
    console.log(isSignedIn)
    if (isSignedIn === null){
      return(
        <h1>Checking if you are signed in...</h1>
      )
    }
    return isSignedIn ? <Component/> : <LoginPage/>
  }

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} exact></Route>
        <Route path="/dashboard" element={ ifUserSignedIn(Dashboard)}/>
      </Routes>
   
   </BrowserRouter> 
  )
}

export default Application