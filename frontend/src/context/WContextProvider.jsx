import React, {useState} from "react";
import WContext from "./WContext";

const WContextProvider = ({children})=>{
    const [open, setopen] = useState(false);
    return <WContext.Provider value={{ open, setopen }}>
        {children}
    </WContext.Provider>
}

export default WContextProvider;