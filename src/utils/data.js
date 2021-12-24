import video from '../videos/sh3ck-1080p-210928.mp4'
import hiwImage1 from '../images/1stStep.png'
import hiwImage2 from '../images/2ndStep.png'
import hiwImage3 from '../images/3rdStep.png'
import hiwImage4 from '../images/4thStep.png'
import hiwImage5 from '../images/5thStep.png'

export const infoHero = {
    id:'heroSection',
    heroH1: 'Somos la nueva forma de comprar sin miedo',
    heroH1_2: 'por internet',
    buttonLabel: 'Ver Video',
    linkedTo: 'videoSection',
    heroH1Mobil: 'Compra sin miedo por internet',
    heroPMobil: 'Nosotros chequeamos los productos que tu quieres comprar...',
    // English
    heroH1_EN: 'We are the new way of buying without fear',
    heroH1_2_EN:'online',    
    heroH1Mobil_EN: 'Buy without fear online',
    heroPMobil_EN: 'We check the products you want to buy',
    buttonLabel_EN: 'See Video'
}

export const infoVideo = {
    id:'videoSection',
    lightBg: true,
    lightText: false,
    LightTextDesc: true,
    topLine:'No te pierdas de nada...',
    headLine:'En este video te explicamos de que trata nuestro servicio...',
    description: 'Imagina que quieres comprar algo a un super buen précio pero témez que pueda ser una estáfa o dudas de la calidad del producto. En Sh3ck tenemos la solución para ti...',
    videoSrc: video,
    darkText: '#010606', 
    buttonLabel: 'Como funciona',
    linkedTo: 'hiwSection' 
}

export const infoHIW = {
    id:'hiwSection',
    imgSrc1: hiwImage1,
    imgSrc2: hiwImage2,
    imgSrc3: hiwImage3,
    imgSrc4: hiwImage4,
    imgSrc5: hiwImage5,
    alt1:' escoge ciudad',
    alt2:'tipo de producto',
    alt3:'escoge chequeador',
    alt4:'finaliza oreden',
    alt5:'video en tiempo real', 
    linkedTo: 'contactSection',
    buttonLabel:'¿Quieres comenzar?'
}
export const infoContact = {
    id:'contactSection',
    lightBg: true,
    lightText: true,
    LightTextDesc: true,
    topLine:'¿Estas listo para comenzar?',
    headLine:'Nuestra App móvil estará lista prónto, mientras tanto...',
    description: 'Estamos trabajando duro para llevarte la mejor experiencia móvil, aún asi puedes comunicarte con nosotros, dejarnos tus datos para informarte cuando esté activa o chequear un producto desde ya...',
    darkText: '#010606', 
    linkedTo: 'hiwSection' 
}

