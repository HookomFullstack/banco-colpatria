export const PasswordInput = ({  
    password, handleChange, handleBlur, touched, errors
}) => {
  return (
    <>
        <input 
            placeholder="ingresar contraseña"
            type="text" 
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={password}
            inputMode="text"
            required
            className="outline-none border-2"
        />
        {/* 
            {
            touched.password && errors.password && (
                <p>{errors.password}</p>
            )
            } 
        */}
  </>
  )
}
