import React from 'react'
import { Drawer, List, ListItem, styled, Box, Typography } from '@mui/material'
import Portfolio from '/portfolio.png'

function OthStatus() {
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

    const UpdateTiem = styled(Box)`
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
    const OtherStatus = styled(List)`
        &:hover{
            background:#d7d7d7;
            transition:0.3s;
        }
    `
  return (
    <>
        <OtherStatus >
            <ListItem>
                <LogoImg src={Portfolio} draggable='false' alt="dp" />
                <LiContent>
                    <Box>
                        <Name>Persone Name</Name>
                        <UpdateTiem>
                            <Typography>
                                today at 12:01 am
                            </Typography>
                        </UpdateTiem>
                    </Box>
                </LiContent>
            </ListItem>
        </OtherStatus>
    </>
  )
}

export default OthStatus