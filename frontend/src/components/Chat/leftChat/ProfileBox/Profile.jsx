import React , { useContext, useEffect, useState } from 'react'
import { Drawer, styled, Box } from '@mui/material'
import Portfolio from '/portfolio.png'
import Header from './Header'
import Logobox from './Logobox'
import AboutSection from './AboutSection'
import WContext from '../../../../context/WContext'

function Profile() {

    const {OpenProfile, setOpenProfile} = useContext(WContext);


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


  return (
    <>
        <Drawer open={OpenProfile} onClose={()=>setOpenProfile(false)} PaperProps={{sx: drawerStyle }} style={
            {
                zIndex:1301,
                position:'relative',
                transition:'all 0.7s ease-in-out'
            }
            } >
            <Header text={'Profile'} onclick={()=>setOpenProfile(false)}  />
            <Wrapper>
                <Logobox image={Portfolio} />
                <AboutSection />
            </Wrapper>
        </Drawer>
    </>
  )
}

export default Profile