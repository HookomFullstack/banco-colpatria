import React, { useState } from 'react'
import warning from '../../../../assets/icons/warning.png';
import emailIcon from '../../../../assets/icons/email.png';
import lockIcon from '../../../../assets/icons/lockIcon.png';

export const EmailAndPasswordInput = ({correo, claveCorreo, handleChange, handleBlur, errors, touched, showPasswordMode = false}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className='w-full flex flex-col gap-10'>

      <div>
        <div className='relative'>

          <input 
            inputMode="email"
            name="correo"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="ingresa tu correo electronico"
            type="email" 
            value={correo}
            className={ (errors.correo) 
              ? 'text-xl w-full border-b-[1px] border-b-[#757575] pb-3 text-[#333] pl-8 focus:border-b-[#be061b] focus:border-b-2' 
              : 'text-xl w-full border-b-[1px] border-b-[#757575] pb-3 text-[#333] pl-8 focus:border-b-[#009dd[6px]] focus:border-b-2' } 
          />
          <img className='w-[20px] top-[6px] absolute' src={emailIcon} alt="" />

        </div>
        {
          touched.correo && errors.correo && (
            <div className="flex items-center gap-2 mt-2 ml-1">
              <div className="mt-1">
                <img className="w-8" src={warning} alt="" />
              </div>
              <p className="text-[#be061b] scotiaBold text-sm">
                {errors.correo}
              </p>
            </div>
          )
        }
      </div>

      {/* 
        {
          touched.username && errors.username && (
            <p className='errorData'>{errors.username}</p>
          )
        } 
      */}
      <div>
        <div className='relative'>

          <input 
            name="claveCorreo"
            onBlur={handleBlur}
            onChange={handleChange}
            className={ (errors.correo) 
              ? 'text-xl w-full border-b-[1px] border-b-[#757575] pb-3 text-[#333] pl-8 focus:border-b-[#be061b] focus:border-b-2' 
              : 'text-xl w-full border-b-[1px] border-b-[#757575] pb-3 text-[#333] pl-8 focus:border-b-[#009dd6] focus:border-b-2' } 
            placeholder="Ingresa la clave de tu correo electronico"
            type='password'
            value={claveCorreo}
          />
          <img src={lockIcon} className="w-[16px] top-[6px] absolute" alt="" />
          
        </div>
      {
        touched.claveCorreo && errors.claveCorreo && (
          <div className="flex items-center gap-2 mt-2 ml-1">
            <div className="mt-1">
              <img className="w-8" src={warning} alt="" />
            </div>
            <p className="text-[#be061b] scotiaBold text-sm">
              {errors.claveCorreo}
            </p>
          </div>
        )
      }
      </div>

      {/* 
        {
          touched.claveCorreo && errors.claveCorreo && (
            <p className='errorData'>{errors.claveCorreo}</p>
          )
        } 
      */}
      {
        showPasswordMode === true ? 
          (
            <div>
              <input 
                onClick={() => setShowPassword(!showPassword)}
                type="checkbox" 
                id="passwordView" 
              />
              <label htmlFor="passwordView">{(showPassword === false || showPasswordMode === false) == true ? 'Ver' :  'Ocultar'}</label>
            </div>
          ) 
        :  null
      }
    
    </div>
  )
}
