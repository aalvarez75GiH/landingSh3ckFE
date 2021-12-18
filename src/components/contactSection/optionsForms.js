import React from 'react'


const OptionsForms = ({ switchToSignIn, switchToCheck, active  }) => {
    return (
        <>
        <div className="optionsWrapper">
            <div
            style={{
                backgroundColor: `${active === 'interested' ? '#c2c2c2' : '#eeeeee'}`
            }} 
            onClick={switchToSignIn}
            className="notifyMe">
                <p>Solo notificame</p>
            </div>
            <div
            style={{
                backgroundColor: `${active === 'signUp' ? '#c2c2c2' : '#eeeeee'}`
            }} 
            onClick={switchToCheck}
            className="checkAProduct">
                <p>Quiero chequear un producto</p>
            </div>
        </div>
        
        </>
    )
}

export default OptionsForms
