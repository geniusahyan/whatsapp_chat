import { ArrowBack, CameraEnhance, Create, Error } from '@mui/icons-material'
import { AppBar, Drawer, Typography, styled, Box } from '@mui/material'
import Background from '../../public/background.jpg'
import LogoImage from '../../public/portfolio.png'
import React from 'react'

function Profile() {
    const drawerStyle = {
        left: 33,
        top: 36,
        width: 485,
        height:660,
    }
    const Header = styled(AppBar)`
        position:absolute;
        height:8rem;
        background:#008069;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-direction:row;
    `
    const LogoBox = styled(Box)`
        background:url(${Background}) no-repeat center / cover;
        height:25%;
        position:relative;
    `
    const Wrapper = styled(Box)`
        width:100%;
        height:81%;
        box-sizing:border-box;
        margin-top:8rem;
        overflow-y:scroll;
        -webkit-overflow-scrolling: touch; 
        &::-webkit-scrollbar {
            width: 0.15rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #622bb7;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
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

    const Details = styled(Box)`
        display:flex;
        flex-direction:column;
        margin-top:2rem;
        margin-top:5rem;
        & > p{
            font-size:0.9rem;
            color:#00a884;
            margin-left:1.5rem;
            margin-bottom:1.5rem;
        }
    `
    const About = styled(Box)`
        display:flex;
        align-items:center;
        gap:1rem;
        & > svg{
            font-size:2rem;
            color:#00a884;
            margin-right:0.5rem;
            margin-left:1rem;
        }
        & > svg:nth-child(3){
            margin-left:6rem;
        }
    `
    const NameDetail = styled(Box)`
        display:flex;
        align-items:center;
        gap:1rem;
        & > svg{
            font-size:2rem;
            color:#00a884;
            margin-right:0.5rem;
            margin-left:1rem;
        }
        & > svg:nth-child(3){
            margin-left:6rem;
        }
    `

  return (
    <>
        <Drawer open={true} PaperProps={{sx: drawerStyle }} style={{zIndex:1300, position:'relative'}} >
            <Header>
                <ArrowBack />
                <Typography variant='h5' > Profile </Typography>
            </Header>
            <Wrapper>
                <LogoBox>
                    <Image src={LogoImage} draggable='false' alt="Logo" />
                    <Camera>
                        <CameraEnhance />
                        <Typography> Change Profile Pic  </Typography>
                    </Camera>
                </LogoBox>
                <Details>
                    <p>About and Gmail</p>
                    <NameDetail>
                        <Error />
                        <Typography> name </Typography>
                    </NameDetail>
                    <About>
                        <Error />
                        <Typography>
                            There is no place like 127.0.0.1
                        </Typography>
                        <Create />
                    </About>
                    <About>
                        <Error />
                        <Typography>
                            There is no place like 127.0.0.1
                        </Typography>
                        <Create />
                    </About>
                </Details>
            </Wrapper>
        </Drawer>
    </>
  )
}

export default Profile