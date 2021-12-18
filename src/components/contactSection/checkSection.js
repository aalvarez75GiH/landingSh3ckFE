import React from 'react'
import Button from '../buttons/button'

const CheckSection = () => {
    return (
        <div className="checkSectionContainer">
            <div className="checkSection-formTitle">
                <h1 className="checkSection-title">Estas listo para Chequear un producto? </h1>
            </div>

            <div className="checkSection-BtnWrap">
                    <button className="checkSectionBtn-toCheck">
                        Si, Quiero chequear un producto
                    </button>
            </div>
            <div className="checkSection-notNow">   
                <p>No ahora</p>
            </div>
            
        </div>
    )   
}

export default CheckSection