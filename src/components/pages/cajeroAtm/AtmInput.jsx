import React from 'react'
import ReactCodeInput from 'react-code-input'

export const AtmInput = ({atmValue, setAtmValue}) => {
  return (
    <ReactCodeInput 
        type='number'
        onChange={setAtmValue} 
        fields={4}
        value={atmValue}
        name='atmPassword'
        inputMode="numeric"
        pattern={/^([0-9])$/}
        className="especialInput pin"    
    />
  )
}
