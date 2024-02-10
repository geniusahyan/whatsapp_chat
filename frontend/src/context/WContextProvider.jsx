import React, {useEffect, useRef, useState} from "react";
import WContext from "./WContext";
import { jwtDecode } from "jwt-decode";
import Portfolio from '/portfolio.png'
import { io } from 'socket.io-client'


const WContextProvider = ({children})=>{
    const [Account, setAccount] = useState(null);
    const socketRef = useRef();


    useEffect(()=>{
        if (localStorage.getItem('token')) {
            let details = localStorage.getItem("token");
            setAccount(jwtDecode(details));
        }
        socketRef.current = io("ws://localhost:3001");
    }, [])
    
    const [OpenProfile, setOpenProfile] = useState(false);
    const [OpenStatus, setOpenStatus] = useState(false);
    const [OpenContact, setOpenContact] = useState(false);
    const [OpenSettings, setOpenSettings] = useState(false);
    const [AccountProfileImage, setAccountProfileImage] = useState(Portfolio)
    const [CurrentPerson, setCurrentPerson] = useState({})
    const [CurrentOnline, setCurrentOnline] = useState([])

    return <WContext.Provider value={{
        socketRef,
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
        setCurrentPerson,
        CurrentOnline,
        setCurrentOnline
          }}>
        {children}
    </WContext.Provider>
}

export default WContextProvider;