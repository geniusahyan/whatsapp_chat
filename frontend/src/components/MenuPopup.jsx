import React from 'react'
import { List, styled,Box, ListItem } from '@mui/material'

function MenuPopup() {


  const ListDiv = styled(List)`
    background:#fff;
    width:12rem;
    margin:0;
    padding:0;
    box-sizing:border-box;
    border-radius:0.2rem;
    height:16rem;
    z-index:12;
    position:absolute;
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
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 11,
  })

  return (
    <MenuCover>
        <ListDiv>
            <ListItem button onClick={() => alert('You clicked the first item!')}>New group</ListItem>
            <ListItem button onClick={() => alert('You clicked the first item!')}>Profile</ListItem>
            <ListItem button onClick={() => alert('You clicked the first item!')}>Starred messages</ListItem>
            <ListItem button onClick={() => alert('You clicked the first item!')}>Labels</ListItem>
            <ListItem button onClick={() => alert('You clicked the first item!')}>Settings</ListItem>
            <ListItem button onClick={() => alert('You clicked the first item!')}>Log out</ListItem>
        </ListDiv>
    </MenuCover>
  )
}

export default MenuPopup