import { ArrowBack, CameraEnhance, Create, Email, Error } from '@mui/icons-material'
import { AppBar, Drawer, Typography, styled, Box } from '@mui/material'
import Header from './ProfileBox/Header'
import React from 'react'
import Logobox from './ProfileBox/Logobox'

function Profile() {
    const drawerStyle = {
        left: 33,
        top: 36,
        width: 485,
        height:660,
    }


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

    const Details = styled(Box)`
        display:flex;
        flex-direction:column;
        gap:2rem;
        margin-top:4rem;
        & > p{
            font-size:0.9rem;
            color:#00a884;
            margin-left:1.5rem;
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
            &:hover{
                cursor:pointer;
                color:#00a884;
                transform:scale(1.2);
                transition:0.3s;
            }
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
            <Header />
            <Wrapper>
                <Logobox />
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
                        <Email />
                        <Typography>
                            {'Email@gmail.com'}
                        </Typography>
                    </About>
                    <p style={{textAlign:'center'}} >You can't change anything 🤣  </p>
                </Details>
            </Wrapper>
        </Drawer>
    </>
  )
}

export default Profile