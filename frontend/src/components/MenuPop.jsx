import { List, styled,Box, ListItem } from '@mui/material'
import React, { useContext, useState } from 'react'
import WContext from '../context/WContext';

function MenuPop() {
    const {handleMoreClick} = useContext(WContext)

    const MenuClose = ()=>{
        const setMenuOpen = handleMoreClick();
        setMenuOpen(false);
    }









    const ListModel = styled(Box)`
        width:95vw;
        height:89vh;
        position:absolute;
        top:0;
        left:0;
        box-sizing:border-box;
    `
    const ListItemModel = styled(Box)`
        width:12rem;
        margin-left:15.8rem;
        margin-top:3rem;
        height:17rem;
        border-radius:0.2rem;
        box-sizing:border-box;
        background:#fff;
        box-shadow:0 0.2rem 0.5rem 0 rgba(0,0,0,0.1);
        padding:0;
    `
    const MenuItem = styled(ListItem)`
        margin:0;
        padding:0.8rem 1rem;
        &:hover{
            cursor:pointer;
            background-color:#e7e7e7;
            transition:300ms ease-in-out forwards;
        }
    `

  return (
    <>
        <ListModel onClick={MenuClose} >
            <ListItemModel>
                <List>
                    <MenuItem>New group</MenuItem>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Starred messages</MenuItem>
                    <MenuItem>Labels</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Log out</MenuItem>
                </List>
            </ListItemModel>
        </ListModel>
    </>
  )
}

export default MenuPop