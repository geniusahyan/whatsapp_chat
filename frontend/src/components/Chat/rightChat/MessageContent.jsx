import { DoneAll } from '@mui/icons-material'
import { styled, ListItem, Typography } from '@mui/material'
import React from 'react'
    const TimeStamp = styled(Typography)`
        font-size:12px;
        position:absolute;
        right:0.6rem;
        bottom:0.1rem;
        opacity:0.6;
        display:flex;
        align-items:center;
        & > svg{
        margin:0;
        padding:0;
        font-size:1.2rem;
        }
    `



function MessageContent({text, senderId, AccountId, time}) {

    const date = new Date(time);
    
    const formattedTime = `${date.getUTCHours().toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0')}:${date.getUTCSeconds().toString().padStart(2, '0')}`;
    
    console.log(formattedTime);

    const leftORright = senderId == AccountId ;

    const TextMessages = styled(ListItem)`
        color:#fff;
        font-size:14px;
        max-width:70%;
        border-radius:7px;
        width: max-content;
        max-height:7rem;
        margin:0;
        ${leftORright ? "margin-left:auto; background:#0c4d63;border-top-right-radius:0;  ": "margin-right:auto;  background:#820dc5; border-top-left-radius:0;  "}
        margin-bottom:0.4rem;
        word-wrap:break-word;
        padding-right:6rem;
        &:hover{
        cursor:pointer;
        background:red !important;
        }
        & > p{
        margin-bottom:0.4rem;
        text-overflow: ellipsis;
        overflow: hidden;
        max-height:7rem;
        user-select:auto;
        }
    `

  return (
    <>
        <TextMessages>
                <Typography>
                    {text}
                </Typography>
                <TimeStamp>
                    {formattedTime}
                    {leftORright && <DoneAll /> }
                    
                </TimeStamp>
        </TextMessages>
    </>
  )
}

export default MessageContent