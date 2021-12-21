import React from 'react'

const FormHeader = ({ active, loggedIn, regView }) => {
    return (
        <>
        { active === 'interested' && (loggedIn || !loggedIn) ? 
        <div className="titleWrapper">
            <div className="formTitle">
                <h1 className="title_1">¿Quieres saber cuando nuestra app esté lista? </h1>
            </div>
            <div className="formDescription">
                <p>Llena estos datos, sabremos que estas interesado y te notificaremos</p>
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
                    <p>Con solo estos 3 datos estarás listo para comenzar a chequear tus productos</p>
                </div>
            </>
            
            : 
            <>
                <div className="formTitle">
                    <h1 className="title_4">Inicia sesión </h1>
                </div>
                <div className="formDescription">
                    <p>Haz login o regístrate para que podamos chequear productos para ti</p>
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
