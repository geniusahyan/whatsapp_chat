import React, { useContext } from 'react'
import { Box, styled} from '@mui/material' 
import EmptyWhatsapp from '/emptyWhatsapp.jpg'
import RightChatBox from './RightChatBox';
import WContext from '../../../context/WContext';

function ChatBox() {


    const {CurrentPerson} = useContext(WContext);





    const Right = styled(Box)`
        background-color:#e7e7e7;
        height:100%;
        width:60%;
        min-width:30rem;
        box-sizing: border-box;
        padding: 0;
        overflow:hidden;
        position:relative;
        & > img{
            filter: blur(3px);
        }
    `


  return (
    <>
        <Right>
        {
            Object.keys(CurrentPerson).length ?
            <RightChatBox /> :
            <img src={EmptyWhatsapp} draggable='false' style={{ width: '100%', height: '100%' }} />
        }
        </Right>
    </>
  )
}

export default ChatBox