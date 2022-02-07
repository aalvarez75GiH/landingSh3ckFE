import React, {useEffect} from 'react'

const GoogleAuth41 = () => {
    useEffect(() => {
        
        window.google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            // @type{!GsiButtonConfiguration}
            { 
                type: 'standard',
                theme: "filled_blue", 
                size: "large", 
                text:'signup_with',
                width: '358',
                height: '300',
                
                
            }  // customization attributes
        )
        // window.google.accounts.id.prompt(); // also display the One Tap dialog
    })
    
    return (
        <>
        <div className="googleAuthContainer">
            <div id="buttonDiv"></div>
        </div>    
        
        </>
    )
}

export default GoogleAuth41