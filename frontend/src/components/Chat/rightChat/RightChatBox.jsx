import React, { useContext, useState, useEffect } from 'react'
import { Box, styled} from '@mui/material' 
import Background from '/background.jpg'
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatFooter from './ChatFooter';
import WContext from '../../../context/WContext';
import { getMessage, setMessage } from '../../../api/api';


function RightChatBox() {
    const {Account, CurrentPerson} = useContext(WContext);
    const [messageID, setmessageID] = useState('')

    useEffect(()=>{
        const getMessageDetails = async ()=>{
            let data = await getMessage({
                senderId: Account.sub,
                receiverId: CurrentPerson.sub,
            })
            setmessageID(data);
        }
        getMessageDetails();
    },[CurrentPerson.sub])



    const BackImage = styled('img')({
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        cursor: 'pointer',
        zIndex:'-1',
    })
    const ChatDialog = styled(Box)`
        height:100%;
        min-width:45rem;
    `
    const RigthBottom = styled(Box)`
        height: 89.8%;
        box-sizing: border-box;
        padding:0;
        display:flex;
        flex-direction:column;
        box-sizing: border-box;
        background:url(${Background});
        position:relative;
        overflow:hidden;
        & > img{
            filter: brightness(110%);
            position:absolute;
            top:0;
            left:0;
        }
    `
  return (
    <>
        <ChatDialog>
            <ChatHeader />
            <RigthBottom>
                <BackImage src={Background} alt="" />
                <ChatMessage messageID={messageID} Account={Account} CurrentPerson={CurrentPerson}  />
            </RigthBottom>
        </ChatDialog>
    </>
  )
}

export default RightChatBox