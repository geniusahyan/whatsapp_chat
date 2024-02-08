import React, { useContext } from 'react'
import { List, styled,Box, ListItem } from '@mui/material'
import WContext from '../context/WContext'

function MenuPopup({setMoreOpen, onCloseClick}) {














  const ListDiv = styled(List)`
    background:#fff;
    width:12rem;
    margin:0;
    padding:0;
    box-sizing:border-box;
    border-radius:0.2rem;
    height:16.4rem;
    z-index:12;
    position:relative;
    top:3rem;
    left:16rem;
    box-shadow:0 0.2rem 0.5rem 0 rgba(0,0,0,0.1);
    &> div{
      margin:0;
      padding:0.8rem 1rem;
      &:hover{
        cursor:pointer;
        background-color:#e7e7e7;
        transition:300ms ease-in-out forwards;
      }
    }
  `

  const MenuCover = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 11,
  })

  return (
    <MenuCover onClick={onCloseClick} >
        <ListDiv>
            <ListItem  button onClick={()=>setMoreOpen(false)}>New group</ListItem>
            <ListItem button  onClick={()=>setMoreOpen(false)}>Profile</ListItem>
            <ListItem button  onClick={()=>setMoreOpen(false)}>Starred messages</ListItem>
            <ListItem button  onClick={()=>setMoreOpen(false)}>Labels</ListItem>
            <ListItem button  onClick={()=>setMoreOpen(false)}>Settings</ListItem>
            <ListItem button  onClick={()=>setMoreOpen(false)}>Log out</ListItem>
        </ListDiv>
    </MenuCover>
  )
}

export default MenuPopup