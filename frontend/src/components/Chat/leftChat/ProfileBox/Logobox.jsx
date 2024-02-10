import React, { useEffect, useState } from 'react';
import { Typography, styled, Box } from '@mui/material';
import { CameraEnhance } from '@mui/icons-material';
import Background from '/background.jpg';
import { jwtDecode } from "jwt-decode";


function Logobox({ image }) {

    const [AccountProfileImage, setAccountProfileImage] = useState(image)
    useEffect(() => {
        const localPerson = localStorage.getItem('token');
        const personToken = jwtDecode(localPerson)
        const profileImage = personToken.picture || image ;
        setAccountProfileImage(profileImage);
    }, [])
    

  const LogoBox = styled(Box)`
    background: url(${Background}) no-repeat center / cover;
    height: 25%;
    position: relative;
    overflow: visible;
  `;

  const Camera = styled(Box)`
    width: 6rem;
    height: 6rem;
    background: #d7d7d7;
    position: absolute;
    top: 25%;
    opacity: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    transition: all 0.4s ease-in-out;

    & > p {
      font-size: 0.6rem;
    }

    & > svg {
      font-size: 3rem;
      color: #00a884;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  `;

  const Image = styled('img')({
    width: '8rem',
    height: '8rem',
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    objectFit: 'contain',
    padding: '0.5rem',
    boxSizing: 'border-box',
    background: '#fff',
    border: '0.3rem solid #d7d7d7',
    borderRadius: '50%',
  });

  return (
    <>
      <LogoBox>
        <Image src={AccountProfileImage} draggable='false' alt='Logo' />
        <Camera>
          <CameraEnhance />
          <Typography>Change Profile Pic</Typography>
        </Camera>
      </LogoBox>
    </>
  );
}

export default Logobox;
