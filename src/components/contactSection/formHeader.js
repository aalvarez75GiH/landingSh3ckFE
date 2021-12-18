import React from 'react'

const FormHeader = ({ active, loggedIn, regView }) => {
    return (
        <>
        { active === 'interested' && (loggedIn || !loggedIn) ? 
        <div className="titleWrapper">
            <div className="formTitle">
                <h1 className="title_1">¿Quieres saber más de nosotros? </h1>
            </div>
            <div className="formDescription">
                <p>Al darnos estos datos podremos enviarte más información</p>
            </div>
        </div>
        : null}
        {/* {active === 'check' && loggedIn === true ?
        <div className="titleWrapper">
            <div className="formTitle">
                <h1 className="title">Estas listo para Chequear tu producto? </h1>
            </div>
        </div>
        :null
        } */}
        {active === 'check' && loggedIn === false ?
        <div className="titleWrapper">
            {regView ? 
            <>
                <div className="formTitle">
                    <h1 className="title_3">Registrate con nosotros </h1>
                </div>
                <div className="formDescription">
                    <p>Para que podamos chequear productos debes tener una cuenta registrada</p>
                </div>
            </>
            
            : 
            <>
                <div className="formTitle">
                    <h1 className="title_4">Inicia sesión </h1>
                </div>
                <div className="formDescription">
                    <p>Para que podamos chequear productos debes hacer inicio de sesión</p>
                </div>
            </>
                
            }
        </div>
        :null
        }
        </>
    )
}

export default FormHeader
