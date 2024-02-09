import React, { useContext, useState, useEffect } from 'react'
import { Box, styled } from '@mui/material' 
import { Chat, MoreVert, MotionPhotosAuto} from '@mui/icons-material';
import WContext from '../context/WContext';
import { jwtDecode } from "jwt-decode";

function LeftTopBox({handleMoreClicks}) {

    const {setOpenProfile, setOpenStatus, setOpenContact, AccountProfileImage, setAccountProfileImage } = useContext(WContext);
    const handleOpenProfile = ()=>{
        setOpenProfile(true)
    }

    useEffect(() => {
        const localPerson = localStorage.getItem('token');
        const personToken = jwtDecode(localPerson)
        const profileImage = personToken.picture || image ;
        setAccountProfileImage(profileImage);
    }, [])




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
            <LogoImg onClick={handleOpenProfile} src={AccountProfileImage} draggable='false' alt="dp" />
            <Iconss>
                <MotionPhotosAuto onClick={()=>setOpenStatus(true)} />
                <Chat onClick={setOpenContact} />
                <MoreVert onClick={handleMoreClicks} />
            </Iconss>
        </LeftTop>
    </>
  )
}

export default LeftTopBox