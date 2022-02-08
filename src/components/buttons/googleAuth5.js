import React, { useState, useEffect } from 'react'
// import '../../bookface.css'

const GoogleAuth5 = ({googleTest}) => {

    // var googleUser = {}
    
    useEffect(()=> {
        window.gapi.load('auth2', () => {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            const auth = window.gapi.auth2.getAuthInstance()
            console.log(auth)
            const element = document.getElementById('googleAuth5')
            auth.attachClickHandler(element, {},
                function(googleUser) {
                    console.log(googleUser)
                    let response = googleUser.getAuthResponse()
                    console.log(response)
                    console.log(response.id_token)
                    googleTest(googleUser, response.id_token)
            })
        },[])
        
    // const attachSignin = (element) => {
    //     console.log(element.id);
    //     window.gapi.attachClickHandler(element, {}, (googleUser) => {
    //           document.getElementById('name').innerText = "Signed in: " +
    //               googleUser.getBasicProfile().getName();
    //         }, function(error) {
    //           alert(JSON.stringify(error, undefined, 2));
    //         });
    })



    return (
        <>
        <div className="googleAuthContainer">
            <div
            id="googleAuth5"
            >Sign In with Google</div>
        </div>  

         
        
        </>
    )
    
    // return isSignedIn ? <h1>You are logged in</h1> : <h1>You are NOT logged in</h1>
  
}

export default GoogleAuth5