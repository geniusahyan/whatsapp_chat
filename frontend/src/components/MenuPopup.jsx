import React, { useContext } from 'react'
import { List, styled,Box, ListItem } from '@mui/material'
import WContext from '../context/WContext'

function MenuPopup({setMoreOpen, onCloseClick}) {

  const {setOpenProfile, setAccount, setOpenSettings} = useContext(WContext);

  const newGroup = ()=>{

  }
  const profileClick = ()=>{
    setTimeout(()=>{
      setOpenProfile(true)
    },100)
  }
  const settingClick = ()=>{
    setTimeout(()=>{
      setOpenSettings(true)
    },100)
  }

  const LogOUt = ()=>{
    localStorage.removeItem('token');
    setOpenSettings(false);
    setAccount(false);
    setOpenProfile(false);
    setOpenStatus(false);
    setOpenContact(false);
    setOpenChat(false);
  }












  const ListDiv = styled(List)`
    background:#fff;
    width:11rem;
    margin:0;
    padding:0;
    box-sizing:border-box;
    border-radius:0.2rem;
    z-index:12;
    position:absolute;
    top:3rem;
    left:16.7rem;
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
    <MenuCover onClick={onCloseClick} >
        <ListDiv>
            <ListItem  button onClick={newGroup}>New group</ListItem>

            <ListItem button  onClick={profileClick}>Profile</ListItem>

            <ListItem button  onClick={()=>setMoreOpen(false)}>Starred messages</ListItem>


            <ListItem button  onClick={settingClick}>Settings</ListItem>

            <ListItem button  onClick={LogOUt}>Log out</ListItem>

        </ListDiv>
    </MenuCover>
  )
}

export default MenuPopup