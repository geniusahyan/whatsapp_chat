import React from 'react'
import { Dialog, Box, styled, List, ListItem, Divider, Typography } from '@mui/material' 
import Portfolio from '../../public/portfolio.png'
import { Call, Chat, Done, MoreVert, MotionPhotosAuto, Troubleshoot, Videocam, DoneAll, KeyboardVoice, AddCircle, AddReaction } from '@mui/icons-material';
import EmptyWhatsapp from '../../public/emptyWhatsapp.jpg'
import Background from '../../public/background.jpg'

function LeftTopBox() {
    const LeftTop = styled(Box)`
        background-color:#e7e7e7;
        height:10%;
        box-sizing: border-box;
        padding:0 0.6rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
    `
    const LogoImg = styled('img')({
        width: '2.5rem',
        height: '2.5rem',
        border:'1px solid #7e4fd5',
        borderRadius: '50%',
        objectFit: 'contain',
        padding:'0.1rem',
        cursor: 'pointer',
        marginLeft:'0.8rem'
    })
    const Iconss = styled(Box)`
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
    `

  return (
    <>
        <LeftTop>
            <LogoImg src={Portfolio} draggable='false' alt="dp" />
            <Iconss>
                <MotionPhotosAuto />
                <Chat />
                <MoreVert />
            </Iconss>
        </LeftTop>
    </>
  )
}

export default LeftTopBox