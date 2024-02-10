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
    const TextMessages = styled(ListItem)`
        background:#256358 !important;
        color:#fff;
        font-size:14px;
        max-width:70%;
        width: max-content;
        max-height:7rem;
        margin:0;
        margin-left:auto;
        margin-bottom:0.4rem;
        word-wrap:break-word;
        padding-right:6rem;
        &:hover{
        cursor:pointer;
        background:red !important;
        }
        border-top-left-radius:7px;
        border-bottom-left-radius:7px;
        & > p{
        margin-bottom:0.4rem;
        text-overflow: ellipsis;
        overflow: hidden;
        max-height:7rem;
        user-select:auto;
        }
    `


function MessageContent({text}) {
    
  return (
    <>
        <TextMessages>
                <Typography>
                    {text}
                </Typography>
                <TimeStamp>
                    {"12:00am"}
                    <DoneAll />
                </TimeStamp>
        </TextMessages>
    </>
  )
}

export default MessageContent