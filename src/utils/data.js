import video from '../videos/Sh3ck new voice over 2.mp4'
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
    buttonLabel_2: '¿Que hacemos?',
    explanation_p1: '¿Has escuchado de personas que compran un producto por internet y son estafados, no reciben el producto correcto o no se encuentra en la condición que lo vieron?',
    explanation_p2:'Nosotros te conectámos con personas que pueden chequear el producto que quieres comprar en la ciudad donde éste se encuentra para que esto no te suceda',    
    explanation_p2b: '¿Te gustaría chequear un producto con nosotros?',
    linkedTo: 'videoSection',
    internalLinkedTo:'wwdSection',
    heroH1Mobil: 'Compra sin miedo por internet',
    heroPMobil: 'Nosotros chequeamos los productos que tu quieres comprar...',
    iwantToCheckBtn:'Si, Quiero chequear',
    // English
    heroH1_EN: 'We are the new way of buying without fear',
    heroH1_2_EN:'online',    
    heroH1Mobil_EN: 'Buy without fear online',
    heroPMobil_EN: 'We check the products you want to buy',
    buttonLabel_EN: 'See Video',
    buttonLabel_2_EN: 'What we do',
    explanation_p1_EN: 'have you heard of people that buy a product online and they have been scammed, they don`t recieve the correct product or it`s not in the good condition the thought it was?',
    explanation_p2_EN: 'We connect you with people that will check the product you want to buy at the city where it`s located so that won`t happen to you',
    explanation_p2b_EN: 'Would you like to check a product with us?',
    iwantToCheckBtn_EN:'Yes, I want to check',
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
    buttonLabel:'Me interesa...',
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
    buttonLabel_EN:'I am interested...',
    alt1_EN:' Choose the city',
    alt2_EN:'Product type',
    alt3_EN:'Choose checker',
    alt4_EN:'Finish the order',
    alt5_EN:'Real time video',
}
export const infoNextStep = {
    id: 'nextStepSection',
    linkedTo:'',
    // Spanish
    nextStepInfoTopLine:"¿Estas interesad@?",
    nextStepInfoTitle1: "¿Que podemos hacer por ti hoy?",
    nextStepButtonLabel_1: "Notifícame cuando la app este lista",
    nextStepButtonLabel_2: "Quiero chequear un producto ahora",
    // Spanish
    nextStepInfoTopLine_EN:"Are you interested?",
    nextStepInfoTitle1_EN: "What can we do for you today?",
    nextStepButtonLabel_1_EN: "Let me know when the app is ready to go",
    nextStepButtonLabel_2_EN: "I wanna check a product today"
    
}

    export const infoContact = {
    id:'contactSectionTest',
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
    // intUsers_h1: '¿Quieres saber cuando nuestra app esté lista?',
    intUsers_h1: 'Llena esto...',
    intUsers_p: 'Llena estos datos, sabremos que estas interesado y te notificaremos',
    users_h1: 'Registrate',
    users_p: 'Con solo estos 3 datos estarás listo para comenzar a chequear tus productos',
    genPIN_h1: 'Genera PIN',
    genPIN_p: 'Introduce estos datos y te enviamos un nuevo PIN automáticamente a tu correo',
    login_h1: 'Inicia sesión',
    login_p: 'Haz login o regístrate para que podamos chequear productos para ti',
    intUsersFormPH1: 'Nombre completo',
    intUsersFormPH2: 'Correo electrónico',
    intUsersFormPH3: 'Ciudad',
    intUsersFormBtnLabel: 'Enviar',
    comeBackLink: 'Cerrar',
    loginFormPH1: 'Correo electrónico',
    loginFormPH2: '#PIN (solo 4 dígitos)',
    loginFormSendBtn: 'Enviar',
    loginFormRegBtn: 'Regístrate',
    loginFormSpan: 'Se me olvidó mi número PIN',
    loginFormGoogleButton: 'Entra con Google',
    forgotPINFormPH1: 'Correo electrónico',
    forgotPINFormPH2: 'Teléfono',
    forgotPINFormSendBtn: 'Enviar',
    forgotPINFormBackBtn: 'Volver',
    regUsersFormPH1: 'Nombre Completo',
    regUsersFormPH2: 'Correo electrónico',
    regUsersFormPH3: 'Teléfono',
    regUsersFormSendBtn: 'Enviar',
    // English
    notifyMe_EN:'Just notify me',
    checkAProduct_EN: 'I want to check a product',
    intUsers_h1_EN: 'Fill this info...',
    intUsers_p_EN: 'Fill in this information, we will know that you are interested and we will notify you',
    users_h1_EN: 'Sign Up',
    users_p_EN: 'With only these 3 fields you are gonna be ready to go and check products',
    genPIN_h1_EN: 'New PIN',
    genPIN_p_EN: 'Enter these info and we`ll send to you a new PIN number to your email address',
    login_h1_EN: 'Log In',
    login_p_EN: 'Do login o get an account in order to check products for you',
    intUsersFormPH1_EN: 'Full Name',
    intUsersFormPH2_EN: 'Email address',
    intUsersFormPH3_EN: 'City',
    intUsersFormBtnLabel_EN: 'Send',
    comeBackLink_EN: 'Close',
    loginFormPH1_EN: 'Email address',
    loginFormPH2_EN: '#PIN (only 4 digits)',
    loginFormSendBtn_EN: 'Send',
    loginFormRegBtn_EN: 'Sign Up',
    loginFormSpan_EN: 'I forgot my PIN number',
    loginFormGoogleButton_EN: 'Continue with Google',
    forgotPINFormPH1_EN: 'Email address',
    forgotPINFormPH2_EN: 'Phone number',
    forgotPINFormSendBtn_EN: 'Send',
    forgotPINFormBackBtn_EN: 'Come back',
    regUsersFormPH1_EN: 'Full Name',
    regUsersFormPH2_EN: 'Email address',
    regUsersFormPH3_EN: 'Phone number',
    regUsersFormSendBtn_EN: 'Send',
}
    

export const infoSpinner = {
    customText: 'Espera...',
    customText_EN: 'Wait...'
}

export const infoCheck = {
    checkSectionTitle: '¿Estas listo para Chequear un producto?',
    checkSectionTitle_EN: 'Are you ready to check a product?',
    checkSectionBtnLabel: 'Comienza',
    checkSectionBtnLabel_EN: 'Start',
    checkSectionExitBtn: 'Salir',
    checkSectionExitBtn_EN: 'Exit'
    
}

export const infoNavBarMobil = {
    option1Copy: 'Video',
    option2Copy: 'Como funciona',
    option3Copy: 'Inicio',
    option4Copy: 'Chequéa',
    option1Copy_EN: 'Video',
    option2Copy_EN: 'How it works',
    option3Copy_EN: 'Home',
    option4Copy_EN: 'Check it',
}


export const infoMainSideBar = {
    option1Copy: 'Mi cuenta',
    option2Copy: 'Mis chequeos',
    option3Copy: 'Ayúda',
    option4Copy: 'Preguntas y respuestas',
    option5Copy: 'Salir y guardar',
    option6Copy: 'Salir',
    option1Copy_EN: 'My account',
    option2Copy_EN: 'My checks orders',
    option3Copy_EN: 'Help',
    option4Copy_EN: 'Questions & Answers',
    option5Copy_EN: 'Logout and save',
    option6Copy_EN: 'Logout',
    hola: 'Hola',
    hello: 'Hello',
    mainSidebarBtnLabel:'Cerrar sesión',
    mainSidebarBtnLabel_EN: 'Log out'
}

export const infoLoginSB = {
    title: 'Inicia sesión',
    description: 'Para que podamos chequear productos debes hacer inicio de sesión',
    title_EN: 'Login',
    description_EN: 'Log In and check products',
    loginSBPH1: 'Correo electrónico',
    loginSBPH2: '#PIN (solo 4 dígitos)',
    loginSBPH1_EN: 'Email address',
    loginSBPH2_EN: '#PIN (only 4 digits)',
    loginSBBtnLabel: 'Enviar',
    loginSBBtnLabel_EN: 'Send',
}

export const infoNavBar = {
    navBarLi1: 'Como funciona',
    navBarLi2: 'Quiero chequear',
    navBarNav: 'Inicio de sesión',
    navBarLi1_EN: 'How it works',
    navBarLi2_EN: 'I wanna check',
    navBarNav_EN: 'Log in'
}

export const infoFooter = {
    footerH1: 'Algunas cosas sobre nosotros',
    footerH1P1: '¿Quienes somos?',
    footerH1P2: '¿Que hacemos?',
    footerH1P3: '¿Porque lo hacemos?',
    footerH1P4: '¿Preguntas y respuestas',
    footerH1_EN: 'Somethings about us',
    footerH1P1_EN: 'Who we are?',
    footerH1P2_EN: 'What we do?',
    footerH1P3_EN: 'Why we do it?',
    footerH1P4_EN: 'Questions & Answers',
    // *******
    footerH2: 'Contáctanos',
    footerH2P1: 'Contácto',
    footerH2P2: 'Soporte',
    footerH2P3: 'Trabaja con nosotros',
    footerH2P4: 'Video explicativo',
    footerH2_EN: 'Contact us',
    footerH2P1_EN: 'Contact',
    footerH2P2_EN: 'Support',
    footerH2P3_EN: 'Work with us',
    footerH2P4_EN: 'Explainer video',
    // *********
    footerH3: 'Social Media',
    footerH3P1: 'Facebook',
    footerH3P2: 'Instagram',
    footerH3P3: 'YouTube',
    footerH3P4: 'Twitter',
    // *******
    footerH4: 'Interno',
    footerH4P1: 'Cobránzas',
    footerH4P2: 'Véntas',
    footerH4P3: 'Igeniería',
    footerH4P4: 'Negócios',
    footerH4_EN: 'Internal',
    footerH4P1_EN: 'Collections',
    footerH4P2_EN: 'Sales',
    footerH4P3_EN: 'Engineering',
    footerH4P4_EN: 'Business',
    // ******
    companyName: 'Sh3ck',
    copyRight: 'Sh3ck @'
}

export const infoSideBar = {
    sideBarLink0_EN: 'Check a product',
    sideBarLink1: 'Ir al inicio',
    sideBarLink2: 'Preguntas y Respuestas',
    sideBarLink3: 'Ayuda',
    sideBarLink4: 'idioma',
    sideBarLink5: 'Atrás',
    sideBarLink0: 'Chequéa un producto',
    sideBarLink1_EN: 'Home',
    sideBarLink2_EN: 'Questions & Answers',
    sideBarLink3_EN: 'Help',
    sideBarLink4_EN: 'Language',
    sideBarLink5_EN: 'Exit',
    toggleCopy: '(cambiar a Español)',
    toggleCopy_EN:'(Switch to English)',
    sideBarBtnLabel: 'Cerrar esta ventana',
    sideBarBtnLabel_EN: 'Close'

}