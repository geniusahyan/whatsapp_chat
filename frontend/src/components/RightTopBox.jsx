import React from 'react'
import { Dialog, Box, styled, List, ListItem, Divider, Typography } from '@mui/material' 
import Portfolio from '../../public/portfolio.png'
import { Call, Chat, Done, MoreVert, MotionPhotosAuto, Troubleshoot, Videocam, DoneAll, KeyboardVoice, AddCircle, AddReaction } from '@mui/icons-material';
import EmptyWhatsapp from '../../public/emptyWhatsapp.jpg'
import Background from '../../public/background.jpg'

function RightTopBox() {

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
    const LiContent = styled(Box)`
        display:flex;
        justify-content:space-between;
        width:100%;
        height:100%;
        align-items:center;
    `

    const Name = styled(Typography)`
        margin-left:1rem;
        font-size:1.2rem;
        font-weight:bold;
        line-height:1;
    `
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
 
    const LastSeen = styled(Box)`
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

    const PersonChat = styled(List)`
        width:100%;
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
    }`

    const RightTop = styled(Box)`
        height:10%;
        box-sizing: border-box;
        padding:0 0.6rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
    `

  return (
    <>
        <RightTop>
                    <PersonChat>
                        <ListItem>
                        <LogoImg src={Portfolio} draggable='false' alt="dp" />
                        <LiContent>
                            <Box>
                                <Name>Aslam</Name>
                                <LastSeen>
                                    <Done />
                                    <Typography>
                                      last seen
                                    </Typography>
                                </LastSeen>
                            </Box>
                            <Box>
                                <Iconss>
                                    <Call />
                                    <Videocam />
                                    <Troubleshoot />
                                    <MoreVert />
                                </Iconss>
                            </Box>
                        </LiContent>
                        </ListItem>
                        <Divider />
                    </PersonChat>
                    </RightTop>
    </>
  )
}

export default RightTopBox