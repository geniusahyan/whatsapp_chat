import React from 'react'
import { Box, styled} from '@mui/material' 
import EmptyWhatsapp from '../../public/emptyWhatsapp.jpg'
import RightChatBox from './RightChatBox';

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


  return (
    <>
        <Right>
            {/* <img width={'100%'} height={'100%'} src={EmptyWhatsapp} draggable='false' alt="emptyWhatsapp" /> */}
            <RightChatBox />
        </Right>
    </>
  )
}

export default RightBox