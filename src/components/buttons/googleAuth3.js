import React, { useEffect } from 'react'
// import '../../bookface.css'

const GoogleAuth3 = ({isSignedIn, googleTest}) => {
    
    useEffect(()=> {
        window.gapi.load('signin2', () => {
            const params = {
                onsuccess: (user) => {
                    console.log(user)
                    let response = user.getAuthResponse()
                    console.log(response)
                    googleTest(response.id_token)
                },
                'theme': 'dark',
                'width': 370,
                'height': 85,
                longtitle: true
            }
            window.gapi.signin2.render('loginButton', params )
          })
    },[])
   
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
            >Inicia sesion con Google</div>
        </div>    
        
        </>
    )
    
    // return isSignedIn ? <h1>You are logged in</h1> : <h1>You are NOT logged in</h1>
  
}

export default GoogleAuth3