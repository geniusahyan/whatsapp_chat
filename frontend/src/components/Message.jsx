import React from 'react'
import { Dialog, Box, styled, List, ListItem, Divider, Typography } from '@mui/material' 
import Portfolio from '../../public/portfolio.png'
import { Call, Chat, Done, MoreVert, MotionPhotosAuto, Troubleshoot, Videocam, DoneAll, KeyboardVoice, AddCircle, AddReaction } from '@mui/icons-material';
import EmptyWhatsapp from '../../public/emptyWhatsapp.jpg'
import Background from '../../public/background.jpg'

function Message() {

    const Dialogbox = {
        position: 'absolute',
        top: '46%',
        left: '47.5%',
        transform: 'translate(-50%, -50%)',
        width: '95vw',
        maxWidth: '100%',
        height:'95%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'flex-wrap',
        color: '#525252'
    }

    const Wrapper = styled(Box)`
        margin:0;
        padding:0;
        background-color:#e7e7e1;
        width:100vw;
        height:100vh;
    `
    const LeftTop = styled(Box)`
        background-color:#e7e7e7;
        height:10%;
        box-sizing: border-box;
        padding:0 0.6rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
    `
    const RightTop = styled(Box)`
        height:10%;
        box-sizing: border-box;
        padding:0 0.6rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
    `
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

    const Left = styled(Box)`
        height:100%;
        box-sizing: border-box;
        width:40%;
        user-select: none;
        min-width:25rem;
        `
    const Right = styled(Box)`
        background-color:#e7e7e7;
        height:100%;
        width:60%;
        box-sizing: border-box;
        padding: 0;
        overflow:hidden;
        position:relative;
        & > img{
            filter: blur(3px);
        }
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
        }
    `
    const Name = styled(Typography)`
        margin-left:1rem;
        font-size:1.2rem;
        font-weight:bold;
        line-height:1;
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

    const CustomDivider = styled(Divider)(({ theme }) => ({
        backgroundColor: '#0000ff1c', 
        height: '100%',
        width: '0.1rem',
      }));
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
    const LiContent = styled(Box)`
        display:flex;
        justify-content:space-between;
        width:100%;
        height:100%;
        align-items:center;
    `
    const ChatDialog = styled(Box)`
        height:100%;
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
    const BackImage = styled('img')({
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        cursor: 'pointer',
        zIndex:'-1',
    })

    const ChatTextBox = styled(Box)`
        width:100%;
        height:100%;
        box-sizing: border-box;
        padding:2rem;
        margin:0;
        overflow-y:scroll;
        -webkit-overflow-scrolling: touch; /* for smooth scrolling on iOS */
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
            height:7rem;
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
        <Wrapper>
            <Dialog open={true} hideBackdrop PaperProps={{sx:Dialogbox}} >
            <Left>
                <LeftTop>
                    <LogoImg src={Portfolio} draggable='false' alt="dp" />
                    <Iconss>
                        <MotionPhotosAuto />
                        <Chat />
                        <MoreVert />
                    </Iconss>
                </LeftTop>
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
            </Left>
            <CustomDivider orientation='vertical' />
            <Right>
                {/* <img width={'100%'} height={'100%'} src={EmptyWhatsapp} draggable='false' alt="emptyWhatsapp" /> */}
                <ChatDialog>
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
                    <RigthBottom>
                        {/* <BackImage src={Background} alt="" /> */}
                        <ChatTextBox>
                            <List>
                                <TextMessage>
                                    <Typography>
                                        hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi delectus facilis fugit.Hey, how are you? I miss you!
                                        hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi delectus facilis fugit.Hey, how are you? I miss you!
                                    </Typography>
                                    <TimeStamp>
                                        12:00am
                                        <DoneAll />
                                    </TimeStamp>
                                </TextMessage>
                                <TextMessages>
                                    <Typography>
                                        hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi delectus facilis fugit.Hey, how are you? I miss you!
                                        hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi delectus facilis fugit.Hey, how are you? I miss you!
                                    </Typography>
                                </TextMessages>
                            </List>
                        </ChatTextBox>
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
                    </RigthBottom>
                </ChatDialog>
            </Right>
            </Dialog>
        </Wrapper>
    </>
  )
}

export default Message;