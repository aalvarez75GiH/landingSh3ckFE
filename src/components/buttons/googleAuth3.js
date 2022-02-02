import React, { useState, useEffect } from 'react'
// import '../../bookface.css'

const GoogleAuth3 = ({isSignedIn, googleTest}) => {
    let auth
    
    useEffect(()=> {
        window.gapi.load('signin2', () => {
            const params = {
                onsuccess: () => {
                    console.log('Google test must be executed...')
                    googleTest()
                },
                'theme': 'dark'
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
            >Sign In with Google</div>
        </div>    
        
        </>
    )
    
    // return isSignedIn ? <h1>You are logged in</h1> : <h1>You are NOT logged in</h1>
  
}

export default GoogleAuth3