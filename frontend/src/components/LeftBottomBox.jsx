import React from 'react'
import { Dialog, Box, styled, List, ListItem, Divider, Typography } from '@mui/material' 
import Portfolio from '../../public/portfolio.png'
import { Call, Chat, Done, MoreVert, MotionPhotosAuto, Troubleshoot, Videocam, DoneAll, KeyboardVoice, AddCircle, AddReaction } from '@mui/icons-material';
import EmptyWhatsapp from '../../public/emptyWhatsapp.jpg'
import Background from '../../public/background.jpg'

function LeftBottomBox() {
    const LiContent = styled(Box)`
        display:flex;
        justify-content:space-between;
        width:100%;
        height:100%;
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
    const LeftBottom = styled(Box)`
        height: 90%;
        box-sizing: border-box;
        padding:0;
        box-sizing: border-box;
        overflow-y: scroll;
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

    const LastMessage = styled(Box)`
        display:flex;
        text-wrap:nowrap;
        align-items:center;
        gap:0.2rem;
        margin-left:0.6rem;
        margin-top:0.2rem;
        & > svg{
            font-size:1rem;
        }
        & > p{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width:15rem;
        }
    `
    const Name = styled(Typography)`
        margin-left:1rem;
        font-size:1.2rem;
        font-weight:bold;
        line-height:1;
    `
    const Person = styled(List)`
        padding: 0;
        & > li{
            margin: 0;
            padding:0.5rem 1.2rem;
            list-style: none;
            &:hover{
                cursor:pointer;
                background-color:#e7e7e7;
                transition:0.1s;
            }
            & > img{
                margin-left:0;
            }
        }
    `


  return (
    <>
        <LeftBottom>
            <Person>
                <ListItem>
                <LogoImg src={Portfolio} draggable='false' alt="dp" />
                <LiContent>
                    <Box>
                        <Name>Aslam</Name>
                        <LastMessage>
                            <Done />
                            <Typography>
                                last message this is somethingasdfasdfadsfasdfasd
                            </Typography>
                        </LastMessage>
                    </Box>
                    <Box>
                        <Typography>12/01/2024</Typography>
                    </Box>
                </LiContent>
                </ListItem>
                <Divider />
            </Person>
        </LeftBottom>

    </>
  )
}

export default LeftBottomBox