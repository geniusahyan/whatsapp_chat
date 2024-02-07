import React from 'react'
import { Dialog, Box, styled, List, ListItem, Divider, Typography } from '@mui/material' 
import Portfolio from '../../public/portfolio.png'
import { Call, Chat, Done, MoreVert, MotionPhotosAuto, Troubleshoot, Videocam, DoneAll, KeyboardVoice, AddCircle, AddReaction } from '@mui/icons-material';

function SendInputCom() {
    const SendBox = styled(Box)`
    background-color:#e7e7e7;
    width:100%;
    height:3.5rem;
    padding:0 1rem;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    align-items:center;
    & > div{
        background:white;
        height:2rem;
        width:2rem;
        display:flex;
        justify-content:center;
        align-items:center;
        color:#525252;
        border-radius:50%;
        & > svg {
            margin: 0 0.8rem;
            font-size: 1.7rem;
            &:hover{
                cursor:pointer;
                color:#00a884;
                transform:scale(1.2);
                transition:0.3s;

            }
        }
        &:hover{
            cursor:pointer;
            transition:0.1s;
        }
    }
`
const InputBox = styled(Box)`
    width:37rem !important;
    border-radius:6px !important;
    height:2.5rem !important;
    box-sizing: border-box;
`
const Input = styled('input')({
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    padding: '0 1rem',
    boxSizing: 'border-box',
    fontSize: '1rem',
    color: '#525252',
    '&:focus': {
        border: 'none',
        boxShadow: 'none',
    },
})

  return (
    <>
        <SendBox>
                            <Box>
                                <AddCircle />
                            </Box>
                            <InputBox>
                                <AddReaction />
                                <Input placeholder='Type message here..' type="text" name="" id="" />
                            </InputBox>
                            <Box>
                                <KeyboardVoice />
                            </Box>
                        </SendBox>
    </>
  )
}

export default SendInputCom