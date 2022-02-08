import React, {useEffect} from 'react'
import useMobilDetection from '../../utils/mobilDetection'


const GoogleAuth4 = () => {

    const mobil2 = useMobilDetection() 
    console.log(mobil2)
    
    useEffect(() => {
        window.google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { 
                type: 'standard',
                theme: "filled_blue", 
                size: "large", 
                text: "continue_with",
                width: `${mobil2.screenWidth <= 414 ? '260' : '400'}`,
                height: 100,
                logo_alignment: 'left',
                
                
            }  // customization attributes
        )
        // window.google.accounts.id.prompt() // also display the One Tap dialog
    })
    
    return <div id="buttonDiv" data-auto_select="true"></div>    
    
}

export default GoogleAuth4
