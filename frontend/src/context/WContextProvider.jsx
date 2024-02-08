import React, {useEffect, useState} from "react";
import WContext from "./WContext";
import { jwtDecode } from "jwt-decode";

const WContextProvider = ({children})=>{
    const [Account, setAccount] = useState(null);
    const [MenuOpen, setMenuOpen] = useState(false);


    const handleMoreClick = ()=>{
        return setMenuOpen;
    }
    useEffect(()=>{
        if (localStorage.getItem('token')) {
            let details = localStorage.getItem("token");
            setAccount(jwtDecode(details));
        }
    }, [])
    
    const [open, setopen] = useState(false);
    const [stts, setstts] = useState(false);
    return <WContext.Provider value={{
         open,
         setopen,
         Account,
         stts,
         setstts,
         MenuOpen,
         setMenuOpen,
         handleMoreClick,
          }}>
        {children}
    </WContext.Provider>
}

export default WContextProvider;