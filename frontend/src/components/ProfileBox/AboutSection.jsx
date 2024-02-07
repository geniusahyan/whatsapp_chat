import React from 'react'
import { Box, styled, Typography } from '@mui/material' 
import {  Create, Email, Error } from '@mui/icons-material'



function AboutSection() {

    const Details = styled(Box)`
        display:flex;
        flex-direction:column;
        color:#525252;
        gap:2rem;
        margin-top:4rem;
        & > p{
            font-size:0.9rem;
            color:#00a884;
            margin-left:1.5rem;
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
        & > svg:nth-of-type(3){
            margin-left:6rem;
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
        & > svg:nth-of-type(2) {
            margin-left:6rem;
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
    </>
  )
}

export default AboutSection