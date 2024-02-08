import React, { useContext, useState } from 'react'
import { Box, styled } from '@mui/material' 
import Portfolio from '../../public/portfolio.png'
import { Chat, MoreVert, MotionPhotosAuto} from '@mui/icons-material';
import WContext from '../context/WContext';

function LeftTopBox({handleMoreClicks}) {

    const {setopen, setstts } = useContext(WContext);






    const LeftTop = styled(Box)`
        background-color:#e7e7e7;
        height:10%;
        box-sizing: border-box;
        padding:0 0.6rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
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

  return (
    <>
        <LeftTop>
            <LogoImg onClick={()=>setopen(true)} src={Portfolio} draggable='false' alt="dp" />
            <Iconss>
                <MotionPhotosAuto onClick={()=>setstts(true)} />
                <Chat  />
                <MoreVert onClick={handleMoreClicks} />
            </Iconss>
        </LeftTop>
    </>
  )
}

export default LeftTopBox