import { Box, styled, Typography, List, ListItem, Divider } from '@mui/material'
import React from 'react'
import Portfolio from '../../public/portfolio.png'
import { Done } from '@mui/icons-material'


function Person({ProfileNames, LastMessageText}) {



    const LiContent = styled(Box)`
        display:flex;
        justify-content:space-between;
        width:100%;
        height:100%;
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

    const Name = styled(Typography)`
        margin-left:1rem;
        font-size:1.2rem;
        font-weight:bold;
        line-height:1;
    `
    const Person = styled(List)`
        padding: 0;
        & > li{
            margin: 0;
            padding:0.5rem 1.2rem;
            list-style: none;
            &:hover{
                cursor:pointer;
                background-color:#e7e7e7;
                transition:0.1s;
            }
            & > img{
                margin-left:0;
            }
        }
    `
    const LastMessage = styled(Box)`
        display:flex;
        text-wrap:nowrap;
        align-items:center;
        gap:0.2rem;
        margin-left:0.6rem;
        margin-top:0.2rem;
        & > svg{
            font-size:1rem;
        }
        & > p{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width:15rem;
        }
    `
 


  return (
    <>
         <Person  >
            <ListItem>
            <LogoImg src={Portfolio} draggable='false' alt="dp" />
            <LiContent>
                <Box>
                    <Name value={ProfileNames} >{ProfileNames}</Name>
                    <LastMessage>
                        <Done />
                        <Typography>{LastMessageText}</Typography>
                    </LastMessage>
                </Box>
                <Box>
                    <Typography>12/01/2024</Typography>
                </Box>
            </LiContent>
            </ListItem>
            <Divider />
        </Person>
    </>
  )
}

export default Person