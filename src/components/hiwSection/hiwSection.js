import React from 'react'
import Button from '../buttons/button'

const HiwSection = ({ 
    id,
    imgSrc1,
    imgSrc2,
    imgSrc3,
    imgSrc4,
    imgSrc5,
    alt1,
    alt2,
    alt3,
    alt4,
    alt5, 
    buttonLabel,
    linkedTo

}) => {
    return (
        <>
            <div 
            id={id}
            className="hiwContainer">
                <h1 className="hiwH1">Como funciona esto...</h1>
                <div className="hiwWrapper">
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={imgSrc1} alt={alt1} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <div className="hiwInfoH2">1</div>
                            <p className="hiwInfoP">
                            Escoge la ciudad donde se encuentra el producto 
                            </p>

                        </div>
                    </div>
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={imgSrc2} alt={alt2} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <div className="hiwInfoH2">2</div>
                            <p className="hiwInfoP">
                                Especifica el tipo de producto y en que tiempo lo necesitas 
                            </p>

                        </div>
                    </div>
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={imgSrc3} alt={alt3} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <div className="hiwInfoH2">3</div>
                            <p className="hiwInfoP">
                            Escoge el chequeador que más te guste y que se adapte mejor a ti
                            </p>

                        </div>
                    </div>
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={imgSrc4} alt={alt4} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <div className="hiwInfoH2">4</div>
                            <p className="hiwInfoP">
                            Completa tu orden, ofrece los datos del vendedor del producto
                            </p>

                        </div>
                    </div>
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={imgSrc5} alt={alt5} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <div className="hiwInfoH2">5</div>
                            <p className="hiwInfoP">
                            El chequeador hará el chequeo y te contacta para darte los detalles 
                            </p>

                        </div>
                    </div>


                </div>
                <div className="hiwBtnWrap">
                    <Button
                    btnBG={ '#FAD570' }
                    fontColor={ true }
                    big={ true }
                    fontBig = { false }
                    buttonLabel={ buttonLabel }
                    linkedTo={linkedTo}
                    offSet={-90}
                    >
                    </Button>
                </div>


            
            </div>
        </>
        
    )
}

export default HiwSection
