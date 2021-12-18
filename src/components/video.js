import React from 'react'
import VideoPlayer from 'react-video-js-player'

const VideoJS = ({ videoSrc }) => {
    // const videoSrc = video
    return(
    <VideoPlayer 
    className="videoPlayer"
    src={videoSrc} 
    width="800" 
    heigth="700"
    />
    ) 
}

export default VideoJS


