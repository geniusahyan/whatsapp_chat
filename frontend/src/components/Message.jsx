import React from 'react'
import { Dialog, Box, styled, List, ListItem, Divider, Typography } from '@mui/material' 
import Portfolio from '../../public/portfolio.png'
import { Call, Chat, Done, MoreVert, MotionPhotosAuto, Troubleshoot, Videocam, DoneAll, KeyboardVoice, AddCircle, AddReaction } from '@mui/icons-material';
import EmptyWhatsapp from '../../public/emptyWhatsapp.jpg'
import Background from '../../public/background.jpg'
import SendInputCom from './SendInputCom';
import ChatBoxModel from './ChatBoxModel';
import RightTopBox from './RightTopBox';
import LeftBottomBox from './LeftBottomBox';
import LeftTopBox from './LeftTopBox';

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





    const CustomDivider = styled(Divider)(({ theme }) => ({
        backgroundColor: '#0000ff1c', 
        height: '100%',
        width: '0.1rem',
      }));
  
 

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



  return (
    <>
        <Wrapper>
            <Dialog open={true} hideBackdrop PaperProps={{sx:Dialogbox}} >
            <Left>
                <LeftTopBox />
                <LeftBottomBox />
            </Left>
            <CustomDivider orientation='vertical' />
            <Right>
                {/* <img width={'100%'} height={'100%'} src={EmptyWhatsapp} draggable='false' alt="emptyWhatsapp" /> */}
                <ChatDialog>
                    <RightTopBox />
                    <RigthBottom>
                        {/* <BackImage src={Background} alt="" /> */}
                        <ChatBoxModel />
                        <SendInputCom />
                    </RigthBottom>
                </ChatDialog>
            </Right>
            </Dialog>
        </Wrapper>
    </>
  )
}

export default Message;