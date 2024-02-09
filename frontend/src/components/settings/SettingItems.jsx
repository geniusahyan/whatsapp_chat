import React, { useContext } from 'react'
import { styled, Box, Typography, Divider } from '@mui/material'
import { CircleNotifications, DarkMode, Download,  Help, KeyboardAlt, LogoutOutlined, NoteAdd, PrivacyTip, Satellite, Security } from '@mui/icons-material'
import WContext from '../../context/WContext'



function SettingItems() {
    const {
        setOpenProfile,
        setAccount,
        setOpenStatus,
        setOpenContact,
        setOpenChat,
        setOpenSettings} = useContext(WContext);

const logoutClick = ()=>{
    localStorage.removeItem('token');
    setOpenSettings(false);
    setAccount(false);
    setOpenProfile(false);
    setOpenStatus(false);
    setOpenContact(false);
    setOpenChat(false);
}


    const SettingList = styled(Box)`
        display:flex;
        align-items:center;
        padding-left:1rem;
        gap:1.5rem;
        height:4rem;
        &:hover{
            cursor:pointer;
            transition:0.3s;
            background:#d7d7d7;
        }
        & > svg{
            font-size:2rem;
            color:#00a884;
            margin-right:0.5rem;
            margin-left:1rem;
        }
    `
    const Logout = styled(Typography)`
        color:#cd6565;
    `
  return (
    <>
        <SettingList>
            <CircleNotifications />
            <Typography>
                {'Notifications'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <PrivacyTip />
            <Typography>
                {'Privacy'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Security />
            <Typography>
                {'Security'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <DarkMode />
            <Typography>
                {'Theme'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Satellite />
            <Typography>
                {'Chat wallpaper'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Download />
            <Typography>
                {'Media auto download'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <NoteAdd />
            <Typography>
                {'Request account info'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <KeyboardAlt />
            <Typography>
                {'Keyboad shortcuts'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Help />
            <Typography>
                {'Help'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList onClick={logoutClick} >
            <LogoutOutlined />
            <Logout>
                {'Log out'}
            </Logout>
        </SettingList>
        <Divider />
    </>
  )
}

export default SettingItems