import React, { useState, useEffect } from 'react'
// import '../../bookface.css'

const GoogleAuth3 = ({googleTest}) => {
    
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
          console.log(auth)
          const isSignedIn = auth.isSignedIn.get()
          setIsSignedIn(isSignedIn)
          console.log(isSignedIn)
          auth.isSignedIn.listen(isSignedIn => {
            setIsSignedIn(isSignedIn)
          })
          window.gapi.load('signin2', ()=> {
            const params = {
                onSucess: () => {
                    console.log('user has finished signing in...')
                }
            }
            window.gapi.signin2.render('loginButton', params )
        })
        
        })
    })
    
}

    if (isSignedIn === null){
      return(
        <h1>Checking if you are signed in...</h1>
      )
    }
    return (
        <>
        <div className="googleAuthContainer">
            <div
            id="loginButton"
            >Sign In with Google</div>
        </div>    
        
        </>
    )
    
    // return isSignedIn ? <h1>You are logged in</h1> : <h1>You are NOT logged in</h1>
  
}

export default GoogleAuth3