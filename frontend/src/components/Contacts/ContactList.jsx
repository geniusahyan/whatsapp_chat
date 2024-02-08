import React from 'react'
import { Drawer, List, ListItem, styled, Box, Typography } from '@mui/material'
import Portfolio from '/portfolio.png'



function ContactList() {

    const About = styled(Box)`
        display:flex;
        text-wrap:nowrap;
        align-items:center;
        gap:0.2rem;
        margin-left:1rem;
        margin-top:0.2rem;
        & > svg{
            font-size:1rem;
        }
        & > p{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width:15rem;
            font-size:0.8rem;
        }
    `
    
    const LiContent = styled(Box)`
        display:flex;
        justify-content:space-between;
        width:100%;
        height:100%;
        align-items:center;
        
    `
    const Name = styled(Typography)`
        margin-left:1rem;
        font-size:1.2rem;
        font-weight:bold;
        line-height:1;
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

    const OtherContact = styled(List)`
        &:hover{
            background:#d7d7d7;
            transition:0.3s;
        }
    `


  return (
    <>
        <OtherContact >
            <ListItem>
                <LogoImg src={Portfolio} draggable='false' alt="dp" />
                <LiContent>
                    <Box>
                        <Name>Persone Name</Name>
                        <About>
                            <Typography>
                                There is place like localhost 🥴
                            </Typography>
                        </About>
                    </Box>
                </LiContent>
            </ListItem>
        </OtherContact>
    </>
  )
}

export default ContactList