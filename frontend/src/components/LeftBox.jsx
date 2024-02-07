import React from 'react'
import { Box, styled } from '@mui/material' 
import LeftTopBox from './LeftTopBox';
import LeftBottomBox from './LeftBottomBox';
import Profile from './Profile';

function LeftBox() {
    const Left = styled(Box)`
        height:100%;
        box-sizing: border-box;
        width:40%;
        user-select: none;
        min-width:25rem;
    `
  return (
    <>
        <Left>
            <LeftTopBox />
            <LeftBottomBox />
            <Profile />
        </Left>
    </>
  )
}

export default LeftBox