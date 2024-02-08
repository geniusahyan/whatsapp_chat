import React from 'react'
import { Box, styled } from '@mui/material' 
import LeftTopBox from './LeftTopBox';
import LeftBottomBox from './LeftBottomBox';
import Profile from './Profile';
import Status from './Status/Status'
import MenuPop from './MenuPop';

function LeftBox() {
    const Left = styled(Box)`
        height:100%;
        box-sizing: border-box;
        width:40%;
        user-select: none;
        min-width:28rem;
    `
  return (
    <>
        <Left>
            <LeftTopBox />
            <LeftBottomBox />
            <Profile />
            <Status />
        </Left>
    </>
  )
}

export default LeftBox