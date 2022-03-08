import React from 'react'
import { infoSpinner } from './data'
import { useSelector } from 'react-redux'

const LoadingSpinner = () => {
    const loading = useSelector((state) => state.homeState.loading)
    const language = useSelector((state) => state.sideBarState.language)
    return (
        <div className={loading ? 'loadingSpinnerContainer_open' : 'loadingSpinnerContainer'}>
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