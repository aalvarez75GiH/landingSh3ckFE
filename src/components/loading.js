import React from 'react'

const Loading = () => {
    return (
        <div className="loadingDataFormWrapper">
                <div className="titleWrapper">
                    <div className="Loading">
                        <div className="Loading__dot-1"></div>
                        <div className="Loading__dot-2"></div>
                        <div className="Loading__dot-3"></div>
                    </div>
                    <div className="formTitle">
                        <h1 className="title">Espera... </h1>
                    </div>
                    <div className="formDescription">
                        <p>Estamos enviando tus datos</p>
                    </div>
                </div>
        </div>
    )
}

export default Loading