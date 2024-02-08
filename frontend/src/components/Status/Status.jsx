import { Drawer, styled, Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Header from '../ProfileBox/Header'
import WContext from '../../context/WContext'
import Mystatus from './Mystatus'
import OthStatus from './OthStatus'

function Status() {

    const {stts, setstts} = useContext(WContext);
    const AllStatus = [1,2,3,4,5,6,7,8];

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


 
    const View = styled(Typography)`
        font-size:1.3rem;
        margin:0.5rem 1rem;
        color:#00a884;
    `


  return (
    <>
        <Drawer open={stts} PaperProps={{sx: drawerStyle }} style={
            {
                zIndex:1300,
                position:'relative',
                transition:'all 0.3s ease-in-out'
            }
            } >
            <Header text={'Status'} onclick={()=>setstts(false)} />
            <Wrapper>
                <Mystatus />
                <View>Viewed</View>
                {
                    AllStatus.map((status, index)=>{
                        return(
                            <OthStatus key={index} />
                        )
                    })
                }
            </Wrapper>
        </Drawer>
    </>
  )
}

export default Status