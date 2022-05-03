
export const responseDataInterested = {
    errorCode: 409,
    errorMessage:`Ya tus datos fueron suministrados anteriormente y nos contenta. Si quieres chequear un producto haz click en "Quiero chequear un producto ahora"`,
    errorMessage_EN:`We already have your information and we are glad of it. If you want to check a product click I want to check a product`,
    successCode: 201,
    successMessage:`Listo, que bueno que estas interesado. Te estaremos notificando pronto sobre nuestra app`,
    successMessage_EN: `Ready, We are glad you are interested. We'll notify you very soon about our app`,
    offset: -5000
}
export const responseDataRegister = {
    errorCode: 409,
    errorMessage:`Ya te encuentras registrado con nosotros . Si quieres chequear un producto solo inicia sesión y haz click en Quiero chequear un producto`,
    errorMessage_EN:`You are already registered with us. If you want to check a product just login and click I want to check a product`,
    successCode: 201,
    successMessage:`Listo, estás registrado. Te hemos enviado un número PIN de 4 dígitos a tu correo. Inicia sesión para que podamos chequear productos para ti`,
    successMessage_EN:`Done, you are registered. We've sent to you a 4 digit PIN number. Do login in order to check products for you`
}
export const responseDataLogin = {
    errorCode: 400,
    errorMessage:` No te encontramos en nuestra Base de datos. Pueden ser dos cosas: usuario/PIN incorrectos o no estas registrado.`,
    errorMessage_EN: 'We are sorry, we couldn`t find you at our Data Base. It can be weather your entered a invalid pin number or you are not registered',
    // successCode: 201,
    // successMessage:`Bienvenido, ¿Te gustaría chequear un producto?`,
    // successMessage_EN:'Would you like to check a product with us?',
}
export const responseDataNewPIN = {
    errorCode: 400,
    errorMessage:` No te encontramos en nuestra Base de datos. Para poder generar un nuevo PIN de 4 dígitos debes estar registrado con nosotros`,
    errorMessage_EN:`We couldn't find you at our Data base. In order to generate a new PIN number you should be registered with us.`,
    successCode: 200,
    successMessage:`Listo, hemos generado un número PIN de 4 dígitos y te lo hemos enviado a tu correo electrónico`,
    successMessage_EN:`Done, We've generated a new 4 digits PIN number and it was sent to you to your Email address`
}

export const regularCopy = {
    continueBtnCopy: 'Continuar',
    continueBtnCopy_EN: 'Continue',
    hola: 'Hola',
    hello: 'Hello',
    error500Copy: 'Ha ocurrido interno en nuestro servidor, pedimos disculpas...',
    error500Copy_EN: 'There has been an intern error at our side. We apologies...'
}

export const responseDataPayment = {
    errorCode: 404,
    successCode: 200,
    successMessage:`Listo, hemos verificado el pago que has realizado:`,
    successMessage_EN:`Done, We've generated a new 4 digits PIN number and it was sent to you to your Email address`,
}

// Ahora necesitamos más información sobre el producto y el vendedor ¿Estas listo?