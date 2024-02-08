import React from 'react'
import { Drawer, styled, Box, List, ListItem, Typography, Divider } from '@mui/material'
import { Create, Email } from '@mui/icons-material'



function SettingItems() {


    const SettingList = styled(Box)`
        display:flex;
        align-items:center;
        padding-left:1rem;
        gap:1rem;
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
  return (
    <>
        <SettingList>
            <Email />
            <Typography>
                {'ProfileEmail'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Email />
            <Typography>
                {'ProfileEmail'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Email />
            <Typography>
                {'ProfileEmail'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Email />
            <Typography>
                {'ProfileEmail'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Email />
            <Typography>
                {'ProfileEmail'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Email />
            <Typography>
                {'ProfileEmail'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Email />
            <Typography>
                {'ProfileEmail'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Email />
            <Typography>
                {'ProfileEmail'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Email />
            <Typography>
                {'ProfileEmail'}
            </Typography>
        </SettingList>
        <Divider />
        <SettingList>
            <Email />
            <Typography>
                {'ProfileEmail'}
            </Typography>
        </SettingList>
        <Divider />
    </>
  )
}

export default SettingItems