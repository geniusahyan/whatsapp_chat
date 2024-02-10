import React, { useState, useEffect, useRef } from 'react'
import { Box, styled, List} from '@mui/material' 
import ChatFooter from './ChatFooter';
import { getConvMessage, newConvMessage } from '../../../api/api';
import MessageContent from './MessageContent';



    const ChatTextBox = styled(Box)`
        width:100%;
        height:100%;
        box-sizing: border-box;
        padding:0 2rem;
        margin:0;
        overflow-y:scroll;
        -webkit-overflow-scrolling: touch; 
        &::-webkit-scrollbar {
            width: 3px;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background: #ddd;
        }
    `


function ChatMessage({Account, CurrentPerson, messageID}) {

    const scrollref = useRef();
    const [text, settext] = useState("");
    const [messageArr, setmessageArr] = useState([])


    useEffect(()=>{
        const getMessageDetails = async ()=>{
            let data = await getConvMessage(messageID._id)
            setmessageArr(data)
        }
        scrollref.current?.scrollIntoView({ behavior: 'smooth' });
         const interval = setInterval(()=>{
            getMessageDetails();
        },500)
    },[])

    const footerText = async (e)=>{
        if (e.key == 'Enter' || e.type == "click" ) {
                    let Convmessage = {
                        senderId: Account.sub,
                        receiverId: CurrentPerson.sub,
                        messageId: messageID._id,
                        type:'text',
                        content:text
                    }
                    settext('');
                    await newConvMessage(Convmessage);
                }
    }

  return (
    <>
        <ChatTextBox ref={scrollref} >
            <List>
                { messageArr && 
                    messageArr.map((item, index) => {
                        return (
                            <MessageContent time={item.createdAt} senderId={item.senderId} AccountId={Account.sub} text={item.content} key={index} />
                        )
                    })
                }
                
            </List>
        </ChatTextBox>
        <ChatFooter 
            footerText={footerText}
            text={text}
            settext={settext}
        />
    </>
  )
}

export default ChatMessage