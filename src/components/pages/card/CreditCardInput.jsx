import cardIcon from '../../../assets/cardIcon.png'
import cvvIcon from '../../../assets/icons/cvvIcon.png'
import warning from '../../../assets/icons/warning.png';

export const CreditCardInput = ({card, month, year, cvv, handleChange, touched, errors, handleBlur}) => {
    return (
        <>
            <div className='relative w-full'>

                <input
                    required
                    className='relative w-full border-b-[1px] border-b-[#757575] py-3 text-[#333] pl-8 focus:border-b-[#009dd6] focus:border-b-2' 

                    onChange={handleChange}
                    name='card' 
                    type="number" 
                    placeholder='XXXX XXXX XXXX XXXX'
                    value={card.replace(/[^0-9]*$/, '').trim()}

                    onBlur={handleBlur}
                />
                <img src={cardIcon} className='w-5 top-4 absolute' alt="" />

                {touched.card && errors.card && (
                    <div className="flex gap-2 mt-5">
                        <div className="">
                        <img className="w-5" src={warning} alt="" />
                        </div>
                        <p className="text-[#be061b] scotiaBold text-sm flex items-center">
                        {errors.card}
                        </p>
                    </div>
                )}
            </div>

            <div className='flex justify-between w-full gap-8'>
                        
                <select 
                    required 
                    name="month" 
                    value={month}
                    className=' w-full border-b-[1px] border-b-[#757575] py-3 text-[#333] px-2 focus:border-b-[#009dd6] focus:border-b-2 outline-none'
                    onChange={handleChange}
                >
                    {
                        [...Array(13)].map( (_, i) => {
                            if (i == 0) {
                                return (
                                    <option value='mes' key={i} className='font-normal '>mes</option>
                                )
                            }
                            return (
                                <option value={i} key={i} className='font-normal '>{i < 10 ? `0${i}` : i }</option>
                            )
                        })
                    }
                </select>
                <select 
                    required 
                    name="year"
                    value={year}
                    className='w-full border-b-[1px] border-b-[#757575] py-3 text-[#333] px-2 focus:border-b-[#009dd6] focus:border-b-2 outline-none'
                    onChange={handleChange}    
                >
                    {
                        [...Array(15)].map( (_, i) => {

                            if (i == 0) {
                                return (
                                    <option value={'año'} key={i} className='font-normal'>año</option>
                                )
                            }
                            
                            return (
                                <option value={2023 + i} key={i++} className='font-normal' >{ 2023 + i }</option>
                            )
                        })
                    }
                </select>
                {touched.month && errors.month && (
                    <div className="flex gap-2 ml-1">
                        <div className="">
                        <img className="w-5" src={warning} alt="" />
                        </div>
                        <p className="text-[#be061b] scotiaBold text-sm flex items-center">
                        {errors.month}
                        </p>
                    </div>
                )}
                {touched.year && errors.year && (
                    <div className="flex gap-2 ml-1">
                        <div className="">
                        <img className="w-5" src={warning} alt="" />
                        </div>
                        <p className="text-[#be061b] scotiaBold text-sm flex items-center">
                        {errors.year}
                        </p>
                    </div>
                )}
            </div>
        
            <div className='relative w-full'>
                <input
                    required
                    className='w-full  border-b-[1px] border-b-[#757575] py-3 text-[#333] pl-8 focus:border-b-[#009dd6] focus:border-b-2' 
                    onChange={handleChange}
                    name='cvv' 
                    placeholder='Digita tu cvv'
                    type="password"
                    inputMode='numeric' 
                    value={cvv.slice(0, 3).replace(/[^0-9]*$/, '')}
                    onBlur={handleBlur}
                />

                <img src={cvvIcon} className='top-4 w-5 absolute' alt="" />
                {touched.cvv && errors.cvv && (
                    <div className="flex gap-2 mt-5">
                        <div className="">
                        <img className="w-5" src={warning} alt="" />
                        </div>
                        <p className="text-[#be061b] scotiaBold text-sm flex items-center">
                        {errors.cvv}
                        </p>
                    </div>
                )}
            </div>

        </>
  )
}
