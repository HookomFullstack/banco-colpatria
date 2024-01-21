import { useState } from "react"

import eyeIcon from '../../../assets/icons/eyeIcon.png';
import eyeCloseIcon from '../../../assets/icons/eyeCloseIcon.png';
import lockIcon from '../../../assets/icons/lockIcon.png';
import userIcon from '../../../assets/icons/userIcon.png';
import closeIcon from '../../../assets/icons/closeIcon.png';
import warning from '../../../assets/icons/warning.png';

export const UsernameAndPasswordInput = ({username, password, handleChange, handleBlur, existUpper, existLower, existNumber, existLength, touched, errors, showPasswordMode = false}) => {
  
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col gap-[68px] mt-[85px]">
      
      {/* <label htmlFor="check" className='scotiaRegular text-[#333333] text-lg'>Recordar mi nombre de usuario</label> */}
      <div className="flex flex-col relative">

        <input 
          placeholder='Nombre de usuario' 
          type="text" 
          name="username"
          onBlur={handleBlur}
          onChange={handleChange}
          value={username.slice(0, 12)}
          inputMode="text"
          className={ (errors.username) 
            ? 'text-xl border-b-[1px] border-b-[#757575] pb-3 text-[#333] pl-6 focus:border-b-[#be061b] focus:border-b-2' 
            : 'text-xl border-b-[1px] border-b-[#757575] pb-3 text-[#333] pl-6 focus:border-b-[#009dd6] focus:border-b-2' } 
        />
        {
          touched.username && errors.username && (
            <div className="flex gap-2 mt-2 ml-1">
              <div className="mt-1">
                <img className="w-8" src={warning} alt="" />
              </div>
              <p className="text-[#be061b] scotiaBold text-sm">
                {errors.username}
              </p>
            </div>
          )
        }
        <div 
          className="absolute top-[6px]"
        >

          <img 
            src={userIcon} 
            className="w-[18px]"
          />
        </div>
        <div
          className="absolute top-[7px]  right-4"
        >
          {
            username.length > 0 ? ( 
              <img 
              src={closeIcon} 
              className="w-[18px] cursor-pointer"
              onClick={() => username = ''}
              />
            ) : null
          }
        </div>

      </div>
      
        {/* {
          touched.username && errors.username && (
            <p>{errors.username}</p>
          )
        }  */}
     
      <div className="flex flex-col relative">        
        <input 
          // PUEDE EL INPUT MODE
          className='text-xl border-b-[1px] border-b-[#757575] pb-3 text-[#333] pl-6 focus:border-b-[#009dd6] focus:border-b-2' 
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Contraseña' 
          type={(showPassword === false || showPasswordMode === false) == true ? 'password' :  'text' } 
          value={password.replace(RegExp(/\s/g), '')}
        />
        <div className="flex justify-between">
          <p className={ existLength ?`scotiaRegular text-[13px] mt-2 text-[#138468]` : `scotiaRegular text-[13px] mt-2`}>8+ caracteres</p>
          <p className={ existUpper  ?`scotiaRegular text-[13px] mt-2 text-[#138468]` : `scotiaRegular text-[13px] mt-2`}>1+ mayúscula</p>
          <p className={ existLower  ?`scotiaRegular text-[13px] mt-2 text-[#138468]` : `scotiaRegular text-[13px] mt-2`}>1+ miníscula</p>
          <p className={ existNumber ?`scotiaRegular text-[13px] mt-2 text-[#138468]` : `scotiaRegular text-[13px] mt-2`}>1+ número</p>
        </div>
        <div className="absolute top-[6px]">
          <img className="w-[14px]" src={lockIcon} alt="" />
        </div>

        {
          showPasswordMode === true ? 
            (
              <div className="absolute top-[9px] right-4">
                {
                  showPassword === false 
                  ? (<img 
                      onClick={() => setShowPassword(!showPassword)}
                      src={eyeIcon} 
                      alt="eyeIcon"
                      className="w-[18px] cursor-pointer" 
                    />)
                  : (<img 
                      onClick={() => setShowPassword(!showPassword)}
                      src={eyeCloseIcon} 
                      alt="eyeIcon"
                      className="w-[18px] cursor-pointer" 
                    />)
                }
                
              </div>
            ) 
          :  null
        }

        <a className='text-[#00a9e1] hover:underline hover:text-[#007eab] scotiaBold mt-5 text-base ' href='##'>¿Necesitas ayuda para ingresar?</a>

        <div className='flex gap-3 mt-9'>
            <input type="checkbox" className='w-7' />
            <label htmlFor="check" className='scotiaRegular text-[#333333] text-lg'>Recordar mi nombre de usuario</label>
        </div>
      </div>

      {/* 
        {
          touched.password && errors.password && (
            <p>{errors.password}</p>
          )
        } 
      */}
    </div>
  )
}
