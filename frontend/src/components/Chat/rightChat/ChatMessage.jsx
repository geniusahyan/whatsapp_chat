import React, { useState, useEffect } from 'react'
import { Box, styled, List, ListItem, Typography } from '@mui/material' 
import { DoneAll} from '@mui/icons-material'
import ChatFooter from './ChatFooter';
import { newConvMessage } from '../../../api/api';



    const ChatTextBox = styled(Box)`
        width:100%;
        height:100%;
        box-sizing: border-box;
        padding:2rem;
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
    const TextMessage = styled(ListItem)`
        background:#256358 !important;
        padding:0.4rem 0.6rem;
        color:#fff;
        font-size:14px;
        text-align:left;
        max-width:70%;
        padding-bottom:1rem;
        margin:0;
        margin-bottom:0.4rem;
        word-wrap:break-word;
        position:relative;
        &:hover{
        cursor:pointer;
        background:#256358!important;
        }
        border-top-right-radius:7px;
        border-bottom-right-radius:7px;
    `
    const TextMessages = styled(ListItem)`
        background:#256358 !important;
        padding:0.4rem 0.6rem;
        color:#fff;
        font-size:14px;
        max-width:70%;
        max-height:7rem;
        margin:0;
        margin-left:auto;
        margin-bottom:0.4rem;
        word-wrap:break-word;
        &:hover{
        cursor:pointer;
        background:#256358!important;
        }
        border-top-left-radius:7px;
        border-bottom-left-radius:7px;
        & > p{
        margin-top:0.4rem;
        text-overflow: ellipsis;
        overflow: hidden;
        max-height:7rem;
        }
    `
    const TimeStamp = styled(Typography)`
        font-size:12px;
        position:absolute;
        right:0.6rem;
        bottom:0.6rem;
        opacity:0.6;
        display:flex;
        align-items:center;
        & > svg{
        margin:0;
        padding:0;
        font-size:1.2rem;
        }
    `

function ChatMessage({Account, CurrentPerson, messageID}) {

    const messageArr = [1,2,3,4,5];
    const [text, settext] = useState("");

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
        <ChatTextBox>
            <List>
                {
                    messageArr.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <TextMessages>
                                        <Typography>
                                            hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi delectus facilis fugit.Hey, how are you? I miss you!
                                        </Typography>
                                        <TimeStamp>
                                            12:00am
                                            <DoneAll />
                                        </TimeStamp>
                                    </TextMessages>
                                    <TextMessage>
                                        <Typography>
                                            hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi delectus facilis fugit.Hey, how are you? I miss you!
                                        </Typography>
                                </TextMessage>
                            </React.Fragment>
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