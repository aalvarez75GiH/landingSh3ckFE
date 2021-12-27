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
    linkedTo: 'hiwSection', 

    // English
    topLine_EN: `Don't miss anything...`,
    headLine_EN: `In this video we explain what our service is about ...`,
    description_EN: `Imagine that you want to buy something at a super good price but fear that it could be a scam or have doubts about the quality of the product. At Sh3ck we have the solution for you ...`,
    buttonLabel_EN:`How it works`

}

export const infoHIW = {
    id:'hiwSection',
    imgSrc1: hiwImage1,
    imgSrc2: hiwImage2,
    imgSrc3: hiwImage3,
    imgSrc4: hiwImage4,
    imgSrc5: hiwImage5, 
    linkedTo: 'contactSection',
    step_1: '1',
    step_2: '2',
    step_3: '3',
    step_4: '4',
    step_5: '5',
    
    // Spanish
    hiwH1: 'Como funciona esto',
    step_description_1: 'Escoge la ciudad donde se encuentra el producto',
    step_description_2: 'Especifica el tipo de producto y en que tiempo lo necesitas',
    step_description_3: 'Escoge el chequeador que más te guste y que se adapte mejor a ti',
    step_description_4: 'Completa tu orden, ofrece los datos del vendedor del producto',
    step_description_5: 'El chequeador hará el chequeo y te contacta para darte los detalles',
    buttonLabel:'¿Quieres comenzar?',
    alt1:' Escoge ciudad',
    alt2:'Tipo de producto',
    alt3:'Escoge chequeador',
    alt4:'Finaliza oreden',
    alt5:'Video en tiempo real',
    
    // English
    hiwH1_EN: 'How it works',
    step_description_1_EN: 'Choose the city where the product you wanna buy is located',
    step_description_2_EN: 'Specify product type and time cap you need the check',
    step_description_3_EN: 'Choose your preferred checker according to your needs',
    step_description_4_EN: 'Complete your check order and enter the seller information',
    step_description_5_EN: 'our checker will complete your check order and will contact to you to give you details of your product',
    buttonLabel_EN:'¿Do you wanna start?',
    alt1_EN:' Choose the city',
    alt2_EN:'Product type',
    alt3_EN:'Choose checker',
    alt4_EN:'Finish the order',
    alt5_EN:'Real time video',
}

    export const infoContact = {
    id:'contactSection',
    linkedTo: 'hiwSection', 

    // Spanish
    contactInfoTopLine:'Pronto a nivel nacional',
    contactInfoTitle1:'Estamos',
    contactInfoTitle2:'construyendo',
    contactInfoTitle3:'nuestra App...',
    contactInfoOption1_h3:'Estamos listos!',
    contactInfoOption1_desc:'A pesar de estar trabajando aún en nuestra app ya estámos listos para ayudarte',
    contactInfoOption2_h3:'Déjanos tus datos.',
    contactInfoOption2_desc:'Te notificaremos cuando nuestra app esté lista. Queremos saber en que ciudad estás',
    contactInfoOption3_h3:'Chequea un producto',
    contactInfoOption3_desc:'Podemos ayudarte desde ya a chequear ese producto que quieres comprar. Compra seguro',

    // English
    contactInfoTopLine_EN:'Nationwide very soon',
    contactInfoTitle1_EN:'We are',
    contactInfoTitle2_EN:'building',
    contactInfoTitle3_EN:'our App...',
    contactInfoOption1_h3_EN:'We are ready!',
    contactInfoOption1_desc_EN:'even though we are building our app we are ready to help you',
    contactInfoOption2_h3_EN:'Leave us your info.',
    contactInfoOption2_desc_EN:'We`ll notify you when our app is ready to go. We want to know also the city you are from',
    contactInfoOption3_h3_EN:'Check a product',
    contactInfoOption3_desc_EN:'We can help you from the very begining to check a product that you wanna buy. Buy safe',

     // contactForms
    // Spanish
    notifyMe: 'Solo notificame',
    checkAProduct: 'Quiero chequear un producto',
    intUsers_h1: '¿Quieres saber cuando nuestra app esté lista?',
    intUsers_p: 'Llena estos datos, sabremos que estas interesado y te notificaremos',
    users_h1: 'Registrate con nosotros',
    users_p: 'Con solo estos 3 datos estarás listo para comenzar a chequear tus productos',
    genPIN_h1: 'Genera PIN',
    genPIN_p: 'Introduce estos datos y te enviamos un nuevo PIN automáticamente a tu correo',
    login_h1: 'Inicia sesión',
    login_p: 'Haz login o regístrate para que podamos chequear productos para ti',
    // English
    notifyMe_EN:'Just notify me',
    checkAProduct_EN: 'I want to check a product',
    intUsers_h1_EN: 'Do you wanna know when our app is ready to go?',
    intUsers_p_EN: 'Fill in this information, we will know that you are interested and we will notify you',
    users_h1_EN: 'Create an account with us',
    users_p_EN: 'With only these 3 fields you are gonna be ready to go and check products',
    genPIN_h1_EN: 'Get a new PIN',
    genPIN_p_EN: 'Enter these info and we`ll send to you a new PIN number to your email address',
    login_h1_EN: 'Log In',
    login_p_EN: 'Do login o get an account in order to check products for you',

}
    


