import React, { useContext, useState } from 'react'
import { Box, styled } from '@mui/material' 
import LeftTopBox from './LeftTopBox';
import LeftBottomBox from './LeftBottomBox';
import Profile from './Profile';
import Status from './Status/Status'
import MenuPopup from './MenuPopup';

function LeftBox() {
  const [MoreOpen, setMoreOpen] = useState(false)

  const handleMoreClick = ()=>{
    setMoreOpen(true);
  }
  const handleMenuClick = () =>{
    setMoreOpen(false);
  }






    const Left = styled(Box)`
        height:100%;
        box-sizing: border-box;
        width:40%;
        user-select: none;
        position:relative;
        min-width:28rem;
    `
  return (
    <>
        <Left>
            <LeftTopBox handleMoreClicks={handleMoreClick} />
            <LeftBottomBox />
            <Profile />
            <Status />
            {
               MoreOpen && <MenuPopup onCloseClick={handleMenuClick} />
            }
        </Left>
    </>
  )
}

export default LeftBox