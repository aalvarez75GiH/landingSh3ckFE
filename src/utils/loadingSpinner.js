import React from 'react'
import { infoSpinner } from './data'

const LoadingSpinner = ({language}) => {
    return (
        <div className="loadingSpinnerContainer">
            <div className="circles">
                <div className="circle circle_1"></div>
                <div className="circle circle_2"></div>
                <div className="circle circle_3"></div>
            </div>
            <span className="customText">{language === 'ES' ? infoSpinner.customText : infoSpinner.customText_EN}</span>
                
        </div>
    )
}

export default LoadingSpinner