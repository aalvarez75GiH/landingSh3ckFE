import useMobilDetection from './mobilDetection'


export const OffsetHandler = (option) => {
    const mobil1 = useMobilDetection()    
        if (option === 'notifyMe' || option === 'checkAProduct'){
            if (mobil1.screenWidth <= 1098 && mobil1.screenWidth > 768){
                return 1220
            }
            if (mobil1.screenWidth <= 768 && mobil1.screenWidth > 560 ){
                return 1025
            }
            if (mobil1.screenWidth <= 560 && mobil1.screenWidth > 480){
                return 1550
            }
            if (mobil1.screenWidth <= 480 && mobil1.screenWidth > 414){
                return 1548
            }
            if (mobil1.screenWidth <= 414 && mobil1.screenWidth > 360){
                return 1650
            }
            if (mobil1.screenWidth <= 360 && mobil1.screenWidth > 280){
                return 1450
            }
        }
        if (option === 'startNow'){
            if (mobil1.screenWidth <= 1098 && mobil1.screenWidth > 768){
                return -180
            }
            if (mobil1.screenWidth <= 768 && mobil1.screenWidth > 560 ){
                return -180
            }
            if (mobil1.screenWidth <= 560 && mobil1.screenWidth > 480){
                return -150
            }
            if (mobil1.screenWidth <= 480 && mobil1.screenWidth > 414){
                return -150
            }
            if (mobil1.screenWidth <= 414 && mobil1.screenWidth > 360){
                return -150
            }
            if (mobil1.screenWidth <= 360 && mobil1.screenWidth > 280){
                return -150
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
        if (option === 'contactSection'){
            if (mobil2.screenWidth <= 1920 && mobil2.screenWidth > 1536){
                return -90
            }
            if (mobil2.screenWidth <= 1536 && mobil2.screenWidth > 1366 ){
                return -90
            }
            if (mobil2.screenWidth <= 1366 && mobil2.screenWidth > 1280){
                return -90
            }
            if (mobil2.screenWidth <= 1280 && mobil2.screenWidth > 1098){
                return -90
            }
        }
}

    



