import React from 'react'
import { Box, styled} from '@mui/material' 
import Background from '../../public/background.jpg'
import RightTopBox from './RightTopBox';
import ChatBoxModel from './ChatBoxModel';
import SendInputCom from './SendInputCom';

function RightBox() {

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


  return (
    <>
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
    </>
  )
}

export default RightBox