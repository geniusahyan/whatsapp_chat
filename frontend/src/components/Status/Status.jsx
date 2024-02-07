import { Drawer, List, ListItem, styled, Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Portfolio from '/portfolio.png'
import Header from '../ProfileBox/Header'
import WContext from '../../context/WContext'
import { Done } from '@mui/icons-material'

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
    const LiContent = styled(Box)`
        display:flex;
        justify-content:space-between;
        width:100%;
        height:100%;
        align-items:center;
        
    `
    const ListItems = styled(Box)`
        display:flex;
        justify-content:space-between;
        width:100%;
        height:100%;
        align-items:center;
        &:hover{
        }
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
    const View = styled(Typography)`
        font-size:1.3rem;
        margin:0.5rem 1rem;
        color:#00a884;
    `
    const OtherStatus = styled(List)`
        &:hover{
            background:#d7d7d7;
            transition:0.3s;
        }
    `

  return (
    <>
        <Drawer open={!stts} PaperProps={{sx: drawerStyle }} style={
            {
                zIndex:1300,
                position:'relative',
                transition:'all 0.3s ease-in-out'
            }
            } >
            <Header text={'Status'} onclick={()=>setstts(false)} />
            <Wrapper>
                <MyStatus />
                <View>Viewed</View>

                {
                    AllStatus.map((status, index)=>{
                        return(
                            <OtherStatus key={index}>
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
                        )
                    })
                }
            </Wrapper>
        </Drawer>
    </>
  )
}

export default Status