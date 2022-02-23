import useMobilDetection from './mobilDetection'


export const OffsetHandler = (option) => {
    const mobil1 = useMobilDetection() 
    // console.log(mobil1)   
        
        if (option === 'video'){
            if (mobil1.screenWidth <= 1098 && mobil1.screenWidth > 768){
                return -180
            }
            if (mobil1.screenWidth <= 768 && mobil1.screenWidth > 560 ){
                return -150
            }
            if (mobil1.screenWidth <= 560 && mobil1.screenWidth > 480){
                return -130
            }
            if (mobil1.screenWidth <= 480 && mobil1.screenWidth > 414){
                return -130
            }
            if (mobil1.screenWidth <= 414 && mobil1.screenWidth > 360){
                // return -3800
                return -130
            }
            if (mobil1.screenWidth <= 360 && mobil1.screenWidth > 280){
                return -110
            }
        }

        if (option === 'howItWorks'){
            if (mobil1.screenWidth <= 1098 && mobil1.screenWidth > 768){
                return -180
            }
            if (mobil1.screenWidth <= 768 && mobil1.screenWidth > 560 ){
                return -150
            }
            if (mobil1.screenWidth <= 560 && mobil1.screenWidth > 480){
                return -130
            }
            if (mobil1.screenWidth <= 480 && mobil1.screenWidth > 414){
                return -140
            }
            if (mobil1.screenWidth <= 414 && mobil1.screenWidth > 360){
                return -130
            }
            if (mobil1.screenWidth <= 360 && mobil1.screenWidth > 280){
                return -140
            }
        }

        if (option === 'checkAProduct'){
            if (mobil1.screenWidth <= 1098 && mobil1.screenWidth > 768){
                return -180
            }
            if (mobil1.screenWidth <= 768 && mobil1.screenWidth > 560 ){
                return -160
            }
            if (mobil1.screenWidth <= 560 && mobil1.screenWidth > 480){
                return -150
            }
            if (mobil1.screenWidth <= 480 && mobil1.screenWidth > 414){
                return -140
            }
            if (mobil1.screenWidth <= 414 && mobil1.screenWidth > 360){
                return 260
            }
            if (mobil1.screenWidth <= 360 && mobil1.screenWidth > 280){
                return 260
            }
        }

        if (option === 'WWD'){
            if (mobil1.screenWidth <= 1098 && mobil1.screenWidth > 768){
                return 100
            }
            if (mobil1.screenWidth <= 768 && mobil1.screenWidth > 560 ){
                return 100
            }
            if (mobil1.screenWidth <= 560 && mobil1.screenWidth > 480){
                return 160
            }
            if (mobil1.screenWidth <= 480 && mobil1.screenWidth > 414){
                return 150
            }
            if (mobil1.screenWidth <= 414 && mobil1.screenWidth > 360){
                return -20
            }
            if (mobil1.screenWidth <= 360 && mobil1.screenWidth > 280){
                return -70
            }
        }


}


export const OffsetHandlerNavBar = (option) => {
    const mobil2 = useMobilDetection() 
    console.log(mobil2)   
        if (option === 'hiwSection'){
            if (mobil2.screenWidth <= 1920 && mobil2.screenWidth > 1536){
                return -100
            }
            if (mobil2.screenWidth <= 1536 && mobil2.screenWidth > 1366 ){
                return -100
            }
            if (mobil2.screenWidth <= 1366 && mobil2.screenWidth > 1280){
                return -100
            }
            if (mobil2.screenWidth <= 1280 && mobil2.screenWidth > 1098){
                return -100
            }
            
        }
        if (option === 'checkAProduct'){
            if (mobil2.screenWidth <= 1920 && mobil2.screenWidth > 1536){
                return -80
            }
            if (mobil2.screenWidth <= 1536 && mobil2.screenWidth > 1366 ){
                return -80
            }
            if (mobil2.screenWidth <= 1366 && mobil2.screenWidth > 1280){
                return -80
            }
            if (mobil2.screenWidth <= 1280 && mobil2.screenWidth > 1098){
                return -80
            }
        }
}


