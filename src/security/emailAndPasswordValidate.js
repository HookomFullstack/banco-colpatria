export const emailAndPasswordValidate = ({
    values,
    errorCorreo = 'Ingresa correctamente tu correo electronico',
    errorClaveCorreo = 'La clave de tu correo electronico es requerida'
}) => {

    let errors = {}
    
    if (values.correo == false) {
        errors.correo = errorCorreo
    }

    if (values.claveCorreo == false) {
        errors.claveCorreo = errorClaveCorreo
    }

    return errors

}