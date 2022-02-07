import React, {useEffect} from 'react'
import axios from 'axios'

const GoogleAuth4 = () => {
    useEffect(() => {
        window.onload = function () {
            window.google.accounts.id.initialize({
              client_id: "915460618193-dcl1a1f3en6f3h22evu9jqk2aqdh1lcj.apps.googleusercontent.com",
              context: 'signin',
              //   ux_mode: "redirect", 
              callback: handleCredentialResponse,
            })
            window.google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                // @type{!GsiButtonConfiguration}
                { 
                    type: 'standard',
                    theme: "filled_blue", 
                    size: "large", 
                    text:'signup_with',
                    width: '300',
                    height: '200',
                    
                    
                }  // customization attributes
            )
            window.google.accounts.id.prompt(); // also display the One Tap dialog
        }
    })
    const handleCredentialResponse = async(response) => {
        console.log("Encoded JWT ID token: " + response.credential)
        const token = response.credential
    try {
        console.log('Sending request to BackEnd api...')
        console.log(token)
        const res = await axios.post('https://intense-atoll-00786.herokuapp.com/api/extUsers/google', {
            token,
            headers:{
                'Content-Type': 'application/json',
            },
        })
        console.log(res.data)
        // const res = await axios.post('http://localhost:5000/api/extUsers/google',token)
        
    } catch (error) {
        console.log(error)
        console.log(error.response.data)
    }
    }

    
    return (
        <>
        <div className="googleAuthContainer">
            <div id="buttonDiv"></div>
        </div>    
        
        </>
    )
}

export default GoogleAuth4
