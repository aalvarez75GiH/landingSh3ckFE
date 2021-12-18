import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="loadingSpinnerContainer">
            <div className="circles">
                <div className="circle circle_1"></div>
                <div className="circle circle_2"></div>
                <div className="circle circle_3"></div>
            </div>
            <span className="customText">Espera...</span>
                
        </div>
    )
}

export default LoadingSpinner