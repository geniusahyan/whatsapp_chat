import React from 'react'
import { AppBar,Typography, styled, Box} from '@mui/material'
import { ArrowBack, CameraEnhance, Create, Email, Error } from '@mui/icons-material'
import Background from '../../../public/background.jpg'
import LogoImage from '../../../public/portfolio.png'




function Logobox() {
    const LogoBox = styled(Box)`
        background:url(${Background}) no-repeat center / cover;
        height:25%;
        position:relative;
    `
    const Camera = styled(Box)`
        width:6rem;
        height:6rem;
        background:#d7d7d7;
        position:absolute;
        top:25%;
        opacity: 0;
        left:50%;
        transform: translate(-50%, 0%);
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding:1rem;
        transition: all .4s ease-in-out;
        & > p{
            font-size:0.6rem;
        }
        & > svg{
            font-size:3rem;
            color:#00a884;
        }
        &:hover{
            cursor:pointer;
            opacity:1;
        }
    `
const Image = styled('img')({
    width: '8rem',
    height: '8rem',
    position:'absolute',
    top:'25%',
    left:'50%',
    transform: 'translate(-50%, 0%)',
    objectFit: 'contain',
    padding:'1rem',
    boxSizing:'border-box',
    background:'#fff',
    border:'0.3rem solid #d7d7d7',
    borderRadius: '50%',
})


  return (
    <>
        <LogoBox>
            <Image src={LogoImage} draggable='false' alt="Logo" />
            <Camera>
                <CameraEnhance />
                <Typography> Change Profile Pic  </Typography>
            </Camera>
        </LogoBox>
    </>
  )
}

export default Logobox