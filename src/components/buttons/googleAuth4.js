import React, {useEffect} from 'react'

const GoogleAuth4 = () => {
    useEffect(() => {
        window.google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { 
                type: 'standard',
                theme: "filled_blue", 
                size: "large", 
                text:'signup_with',
                width: '370',
                height: 100,
                logo_alignment: 'left',
                
                
            }  // customization attributes
        )
        // window.google.accounts.id.prompt() // also display the One Tap dialog
    })
    
    return <div id="buttonDiv" data-auto_select="true"></div>    
    
}

export default GoogleAuth4
