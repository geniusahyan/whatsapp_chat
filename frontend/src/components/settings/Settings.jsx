import React, { useContext } from 'react'
import { Drawer, styled, Box, List, ListItem, Typography, Divider } from '@mui/material'
import Header from '../ProfileBox/Header'
import Portfolio from '/portfolio.png'
import SettingItems from './SettingItems'
import WContext from '../../context/WContext'


function Settings() {


    const {setOpenProfile} = useContext(WContext);








    const LogoImg = styled('img')({
        width: '4rem',
        height: '4rem',
        border:'1px solid #7e4fd5',
        borderRadius: '50%',
        objectFit: 'contain',
        padding:'0.1rem',
        cursor: 'pointer',
        marginLeft:'0.8rem'
    })

    const Name = styled(Typography)`
        margin-left:1rem;
        font-size:1rem;
        font-weight:bold;
        line-height:1;
    `

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

        const drawerStyle = {
            left: 33,
            top: 36,
            width: 485,
            height:660,
        }

        const LiContent = styled(Box)`
            display:flex;
            justify-content:space-between;
            width:20rem;
            height:100%;
            align-items:center;
            
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
    const MyProfile = styled(List)`
        background:#ccadeb;
        height:5rem;
        &:hover{
            background:#d7d7d7;
            transition:0.3s;
        }
    `

    
  return (
    <>
        <Drawer open={true} onClose={()=>setOpenContact(false)} PaperProps={{sx: drawerStyle }} style={
            {
                zIndex:1300,
                position:'relative',
                transition:'all 0.7s ease-in-out'
            }
            } >
            <Header text={'Settings'} onclick={()=>alert('false')}   />
            <Wrapper>
                <MyProfile onClick={()=>{setOpenProfile(true)}} >
                    <ListItem>
                        <LogoImg src={Portfolio} draggable='false' alt="dp" />
                        <LiContent>
                            <Box>
                                <Name>Persone Name</Name>
                                <About>
                                    <Typography>
                                        There is no place like 127.0.0.1
                                    </Typography>
                                </About>
                            </Box>
                        </LiContent>
                    </ListItem>
                </MyProfile>
                <Divider />
                <SettingItems />
            </Wrapper>
        </Drawer>
    </>
  )
}

export default Settings