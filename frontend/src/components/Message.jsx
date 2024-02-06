import React from 'react'
import { Dialog, Box, styled, List, ListItem, ListItemText, Divider, Typography } from '@mui/material' 
import Portfolio from '../../public/portfolio.png'
import { Chat, Done, MoreVert, MotionPhotosAuto } from '@mui/icons-material';

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
        padding: 1rem;
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
    const LiContent = styled(Box)`
        display:flex;
        justify-content:space-between;
        width:100%;
        height:100%;
        align-items:center;
    `

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
            </Right>
            </Dialog>
        </Wrapper>
    </>
  )
}

export default Message;