import React from 'react'
import Button from '../buttons/button'
import useMobilDetection from '../../utils/mobilDetection'
import useMobilDetect from '../../utils/mobilHook'
import VideoJS from '../../components/video'
import { infoVideo } from '../../utils/data'
import { useSelector } from 'react-redux'

const VideoSection = () => {
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection() 
    const language = useSelector((state) => state.sideBarState.language)
    return (
        <div 
        className="infoContainer"
        id={infoVideo.id}
        style={{ 
            backgroundColor:`${infoVideo.lightBg ? '#ffffff': '#010606'}`  
        }}
        >
            <div className="infoWrapper">
                <div className={`${ mobil2.screenWidth <= 1098 || mobil ? 'infoRowMobil' : 'infoRow'}`}>
                    <div className="title">
                        <div className="textWrapper">
                            <p
                            style={{
                                color: `${ infoVideo.lightText ? '#FF810A' : infoVideo.darkText }`
                            }} 
                            className="topLine">{language === 'ES' ? infoVideo.topLine : infoVideo.topLine_EN  }</p>
                            <h1
                            style={{
                                color: `${ infoVideo.lightText ? '#FFFFFF' : infoVideo.darkText }`
                            }} 
                            className="heading">{language === 'ES' ? infoVideo.headLine : infoVideo.headLine_EN}</h1>
                            <p 
                            style={{
                                color: `${ infoVideo.lightText ? '#FFFFFF' : infoVideo.darkText }`
                            }}
                            className="subTitle">{language === 'ES' ? infoVideo.description : infoVideo.description_EN}</p>
                        </div>  
                    </div>
                    <div className="video">
                        <VideoJS videoSrc={infoVideo.videoSrc}/>
                        <div className="videoBtnWrap">
                                    <Button
                                    btnBG={ '#FAD570' }
                                    fontColor={ true }
                                    big={ true }
                                    fontBig = { false }
                                    buttonLabel={ language === 'ES' ?  infoVideo.buttonLabel : infoVideo.buttonLabel_EN }
                                    linkedTo={infoVideo.linkedTo}
                                    offSet={-100}
                                    >
                                    </Button>
                        </div>
                    </div>
                    
                    

                </div>

            </div>
            
        </div>
    )
}

export default VideoSection


