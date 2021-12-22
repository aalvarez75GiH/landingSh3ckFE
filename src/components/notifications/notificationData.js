export const responseDataInterested = {
    errorCode: 409,
    errorMessage:`Ya tus datos fueron suministrados anteriormente y nos contenta. Si quieres chequear un producto haz click en Quiero chequear un producto`,
    successCode: 201,
    successMessage:`Listo, que bueno que estas interesado. Te estaremos notificando pronto sobre nuestra app`
}
export const responseDataRegister = {
    errorCode: 409,
    errorMessage:`Ya te encuentras registrado con nosotros . Si quieres chequear un producto solo inicia sesión y haz click en Quiero chequear un producto`,
    successCode: 201,
    // successMessage:`Listo, te hemos registrado. Si deseas chequear un producto solo haz click en Quiero chequear un producto`
    successMessage:`Listo, estás registrado. Te hemos enviado un número PIN de 4 dígitos a tu correo. Inicia sesión para que podamos chequear productos para ti`
}
export const responseDataLogin = {
    errorCode: 400,
    errorMessage:` No te encontramos en nuestra Base de datos. Pueden ser dos cosas: usuario/contraseña incorrectos o no estas registrado.`,
    successCode: 201,
    successMessage:`Bienvenido, ¿Te gustaría chequear un producto?`
}
export const responseDataNewPIN = {
    errorCode: 400,
    errorMessage:` No te encontramos en nuestra Base de datos. Para poder generar un nuevo PIN de 4 dígitos debes estar registrado con nosotros`,
    successCode: 200,
    successMessage:`Listo, hemos generado un número PIN de 4 dígitos y te lo hemos enviado a tu correo electrónico`
}
