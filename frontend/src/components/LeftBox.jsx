import React, { useContext, useState } from 'react'
import { Box, styled } from '@mui/material' 
import LeftTopBox from './LeftTopBox';
import LeftBottomBox from './LeftBottomBox';
import Profile from './Profile';
import Status from './Status/Status'
import MenuPopup from './MenuPopup';
import AvailableContacts from './Contacts/AvailableContacts';
import Settings from './settings/Settings';

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
            <Settings />
            <AvailableContacts />
            {
               MoreOpen && <MenuPopup onCloseClick={handleMenuClick} />
            }
        </Left>
    </>
  )
}

export default LeftBox