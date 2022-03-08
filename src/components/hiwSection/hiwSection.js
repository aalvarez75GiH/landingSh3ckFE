import React from 'react'
import Button from '../buttons/button'
import { infoHIW } from '../../utils/data'
import { useSelector } from 'react-redux'

const HiwSection = () => {
    
    const language = useSelector((state) => state.sideBarState.language)
    
    return (
        <>
            <div 
            id={infoHIW.id}
            className="hiwContainer">
                <h1 className="hiwH1">{language === 'ES' ? infoHIW.hiwH1 : infoHIW.hiwH1_EN}</h1>
                <div className="hiwWrapper">
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={infoHIW.imgSrc1} alt={language === 'ES' ? infoHIW.alt1 : infoHIW.alt1_EN} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <div className="hiwInfoH2">{infoHIW.step_1}</div>
                            <p className="hiwInfoP">
                            {language === 'ES' ? infoHIW.step_description_1 : infoHIW.step_description_1_EN}
                            </p>

                        </div>
                    </div>
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={infoHIW.imgSrc2} alt={language === 'ES' ? infoHIW.alt2 : infoHIW.alt2_EN} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <div className="hiwInfoH2">{infoHIW.step_2}</div>
                            <p className="hiwInfoP">
                            {language === 'ES' ? infoHIW.step_description_2 : infoHIW.step_description_2_EN}
                            </p>

                        </div>
                    </div>
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={infoHIW.imgSrc3} alt={language === 'ES' ? infoHIW.alt3 : infoHIW.alt3_EN} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <div className="hiwInfoH2">{infoHIW.step_3}</div>
                            <p className="hiwInfoP">
                            {language === 'ES' ? infoHIW.step_description_3 : infoHIW.step_description_3_EN}
                            </p>

                        </div>
                    </div>
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={infoHIW.imgSrc4} alt={language === 'ES' ? infoHIW.alt4 : infoHIW.alt4_EN} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <div className="hiwInfoH2">{infoHIW.step_4}</div>
                            <p className="hiwInfoP">
                            {language === 'ES' ? infoHIW.step_description_4 : infoHIW.step_description_4_EN}
                            </p>

                        </div>
                    </div>
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={infoHIW.imgSrc5} alt={language === 'ES' ? infoHIW.alt5 : infoHIW.alt5_EN} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <div className="hiwInfoH2">{infoHIW.step_5}</div>
                            <p className="hiwInfoP">
                            {language === 'ES' ? infoHIW.step_description_5 : infoHIW.step_description_5_EN} 
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
                    buttonLabel={ language === 'ES' ? infoHIW.buttonLabel : infoHIW.buttonLabel_EN}
                    linkedTo={infoHIW.linkedTo}
                    offSet={-90}
                    >
                    </Button>
                </div>            
            </div>
        </>
        
    )
}

export default HiwSection
