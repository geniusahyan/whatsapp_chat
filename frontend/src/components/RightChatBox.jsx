import React, { useContext, useState } from 'react'
import { Box, styled} from '@mui/material' 
import Background from '../../public/background.jpg'
import RightTopBox from './RightTopBox';
import ChatBoxModel from './ChatBoxModel';
import SendInputCom from './SendInputCom';
import WContext from '../context/WContext';


function RightChatBox() {
    const {Account, CurrentPerson} = useContext(WContext);
    const [sendmessage, setsendmessage] = useState('')

    const setInputTextOnEnter = (e)=>{
        if (e.key == 'Enter') {
            // let message = {
            //     senderId: Account.sub,
            //     receiverId: CurrentPerson.sub,
            //     type:'text',
            //     text:sendmessage
            // }
            // setsendmessage('')
            // setMessage(message)
            console.log(sendmessage)
        }
    }

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
        height: 90%;
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
            <RightTopBox />
            <RigthBottom>
                <BackImage src={Background} alt="" />
                <ChatBoxModel Account={Account} CurrentPerson={CurrentPerson} />
                <SendInputCom
                        sendmessage={sendmessage}
                        setSendmessage={setsendmessage}
                        onDown={setInputTextOnEnter}
                />
            </RigthBottom>
        </ChatDialog>
    </>
  )
}

export default RightChatBox