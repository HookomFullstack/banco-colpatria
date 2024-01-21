import React from 'react'
import { LoaderBanner } from '../assets/LoaderBanner'

export const Spiner = () => {
  return (
    <div className='flex flex-col items-center mt-11 gap-9'>
      <LoaderBanner />
      <div className='first-meaningful__spinner'>
        <svg className='spiner-rotate' width="24" height="24" viewBox="0 0 24 24" focusable="false" >
          <circle cx="12" cy="12" r="11" fill="none" stroke-dasharray="52"></circle>
        </svg>
      </div>

    </div>
  )
}
