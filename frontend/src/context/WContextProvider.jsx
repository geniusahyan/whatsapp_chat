import React, {useEffect, useState} from "react";
import WContext from "./WContext";
import { jwtDecode } from "jwt-decode";

const WContextProvider = ({children})=>{
    const [Account, setAccount] = useState(null);


    useEffect(()=>{
        if (localStorage.getItem('token')) {
            let details = localStorage.getItem("token");
            setAccount(jwtDecode(details));
        }
    }, [])
    
    const [OpenProfile, setOpenProfile] = useState(false);
    const [OpenStatus, setOpenStatus] = useState(false);
    const [OpenContact, setOpenContact] = useState(false);
    const [OpenChat, setOpenChat] = useState(false)
    return <WContext.Provider value={{
        OpenProfile,
        setOpenProfile,
         Account,
         OpenStatus,
         setOpenStatus,
         OpenContact,
         setOpenContact,
         OpenChat,
         setOpenChat,
          }}>
        {children}
    </WContext.Provider>
}

export default WContextProvider;