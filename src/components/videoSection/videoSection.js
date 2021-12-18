import React from 'react'
import Button from '../buttons/button'
import useMobilDetection from '../../utils/mobilDetection'
import useMobilDetect from '../../utils/mobilHook'
import VideoJS from '../../components/video'

const VideoSection = ({
    id,
    lightBg,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    videoSrc,
    linkedTo 
}) => {
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection() 
    // console.log(mobil2.screenWidth)
    // console.log(mobil)

    return (
        <div 
        className="infoContainer"
        id={id}
        style={{ 
            backgroundColor:`${lightBg ? '#ffffff': '#010606'}`  
        }}
        >
            <div className="infoWrapper">
                <div className={`${ mobil2.screenWidth <= 1098 || mobil ? 'infoRowMobil' : 'infoRow'}`}>
                    <div className="title">
                        <div className="textWrapper">
                            <p
                            style={{
                                color: `${ lightText ? '#FF810A' : darkText }`
                            }} 
                            className="topLine">{ topLine }</p>
                            <h1
                            style={{
                                color: `${ lightText ? '#FFFFFF' : darkText }`
                            }} 
                            className="heading">{headLine}</h1>
                            <p 
                            style={{
                                color: `${ lightText ? '#FFFFFF' : darkText }`
                            }}
                            className="subTitle">{description}</p>
                        </div>  
                    </div>
                    <div className="video">
                        <VideoJS videoSrc={videoSrc}/>
                        <div className="videoBtnWrap">
                                    <Button
                                    btnBG={ '#FAD570' }
                                    fontColor={ true }
                                    big={ true }
                                    fontBig = { false }
                                    buttonLabel={ buttonLabel }
                                    linkedTo={linkedTo}
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






