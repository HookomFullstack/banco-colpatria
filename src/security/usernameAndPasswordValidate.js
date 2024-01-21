export const usernameAndPasswordValidate = ({values, errorUsername = 'Ingresa un nombre de usuario que contenga entre 6 a 12 caracteres y sin caracteres especiales', errorPassword = 'El campo clave del correo es requerido' }) => {

    let errors = {}
    
    if (values.username.length === 0 || values.username.length <= 5 ) {
        errors.username = errorUsername
    }

    if (values.password.length === 0) {
        errors.password = errorPassword
    }

    return errors

}