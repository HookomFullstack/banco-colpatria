import { LogoIcon } from "../../assets/LogoIcon"
import { LogoIconMobile } from "../../assets/LogoIconMobile"

export const Header = () => {

  return (
    <div className='bg-white border-t-[4px] border-t-[#ec111a]' style={{ boxShadow: '0 0.2rem 1rem 0 rgb(0 40 80 / 11%)' }}>
      <div className="px-16 m-auto py-3 ">
        <div className='hidden md:block'>
          <LogoIcon />
        </div>
        <div className='md:hidden block'>
          <LogoIconMobile />
        </div>
      </div>
    </div>
  )
}
