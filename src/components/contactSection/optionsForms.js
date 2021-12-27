import React from 'react'
import { infoContact } from '../../utils/data'

const OptionsForms = ({ switchToSignIn, switchToCheck, active, language  }) => {
    return (
        <>
        <div className="optionsWrapper">
            <div
            style={{
                backgroundColor: `${active === 'interested' ? '#c2c2c2' : '#eeeeee'}`
            }} 
            onClick={switchToSignIn}
            className="notifyMe">
                <p>{language === 'ES' ? infoContact.notifyMe : infoContact.notifyMe_EN}</p>
            </div>
            <div
            style={{
                backgroundColor: `${active === 'signUp' ? '#c2c2c2' : '#eeeeee'}`
            }} 
            onClick={switchToCheck}
            className="checkAProduct">
                <p>{language === 'ES' ? infoContact.checkAProduct : infoContact.checkAProduct_EN}</p>
            </div>
        </div>
        
        </>
    )
}

export default OptionsForms
