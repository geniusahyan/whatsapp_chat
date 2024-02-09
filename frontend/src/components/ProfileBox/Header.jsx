import React, { useContext } from 'react'
import { AppBar,Typography, styled} from '@mui/material'
import { ArrowBack} from '@mui/icons-material'
import WContext from '../../context/WContext'


function Header({text='some', onclick }) {



    const Header = styled(AppBar)`
        position:absolute;
        height:8rem;
        background:#008069;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-direction:row;
    `
    const Arrow = styled(ArrowBack)`
    margin: 0 0.8rem;
      font-size: 1.7rem;
      border:1px solid #fff;
      border-radius:50%;
      &:hover{
          cursor:pointer;
          color:#00a884;
          transform:scale(1.2);
          transition:0.3s;

      }
    `
  return (
    <>
        <Header>
            <Arrow onClick={onclick} />
            <Typography variant='h5' > {text} </Typography>
        </Header>
    </>
  )
}

export default Header