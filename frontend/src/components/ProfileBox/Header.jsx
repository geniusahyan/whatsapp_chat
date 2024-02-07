import React from 'react'
import { AppBar,Typography, styled} from '@mui/material'
import { ArrowBack} from '@mui/icons-material'


function Header() {
    const Header = styled(AppBar)`
        position:absolute;
        height:8rem;
        background:#008069;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-direction:row;
    `
  return (
    <>
        <Header>
            <ArrowBack />
            <Typography variant='h5' > Profile </Typography>
        </Header>
    </>
  )
}

export default Header