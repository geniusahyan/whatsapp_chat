import React, {useEffect, useState} from "react";
import WContext from "./WContext";
import { jwtDecode } from "jwt-decode";
import Portfolio from '/portfolio.png'


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
    const [OpenSettings, setOpenSettings] = useState(false);
    const [AccountProfileImage, setAccountProfileImage] = useState(Portfolio)
    const [CurrentPerson, setCurrentPerson] = useState({})
    return <WContext.Provider value={{
        OpenProfile,
        setOpenProfile,
        Account,
        setAccount,
        OpenStatus,
        setOpenStatus,
        OpenContact,
        setOpenContact,
        OpenSettings,
        setOpenSettings,
        AccountProfileImage,
        setAccountProfileImage,
        CurrentPerson,
        setCurrentPerson
          }}>
        {children}
    </WContext.Provider>
}

export default WContextProvider;