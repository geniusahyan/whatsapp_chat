import React, { useContext, useEffect, useState } from 'react'
import { Box, styled } from '@mui/material' 
import { Done } from '@mui/icons-material';
import WContext from '../context/WContext';
import ChatPerson from './ChatPerson'

function LeftBottomBox({ProfileNames, LastMessageText}) {

    const ChatlistPerson = [1,2,3,5,5,5,5,5,5,5,5,5,5,5];

    const { Account, setOpenChat } = useContext(WContext);
    const [ProfileName, setProfileName] = useState("Guest");
    useEffect(() => {
        setProfileName(Account.name);
    }, []);

    const PersonClick = (data)=>{
        setOpenChat(true);
    }




    const LeftBottom = styled(Box)`
        height: 90%;
        box-sizing: border-box;
        padding:0;
        box-sizing: border-box;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch; 
        &::-webkit-scrollbar {
            width: 0.15rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #622bb7;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
    `



  return (
    <>
        <LeftBottom>

            {
                ChatlistPerson.map((chatList,index)=>{
                    return(
                        <div key={index} onClick={PersonClick} >
                            <ChatPerson  ProfileNames={ProfileName} LastMessageText={'LastMessageText'} />
                        </div>
                    )
                })
            }
        </LeftBottom>

    </>
  )
}

export default LeftBottomBox