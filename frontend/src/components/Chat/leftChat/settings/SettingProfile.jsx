import React, { useContext } from 'react'
import { styled, Box, List, ListItem, Typography } from '@mui/material'
import Portfolio from '/portfolio.png';
import WContext from '../../../../context/WContext';


function SettingProfile() {

    const {setOpenProfile, AccountProfileImage, Account } = useContext(WContext)

    const LogoImg = styled('img')({
        width: '4rem',
        height: '4rem',
        border: '1px solid #7e4fd5',
        borderRadius: '50%',
        objectFit: 'contain',
        padding: '0.1rem',
        cursor: 'pointer',
        marginLeft: '0.8rem',
      });
    const Name = styled(Typography)`
      margin-left: 1rem;
      font-size: 1rem;
      font-weight: bold;
      line-height: 1;
    `;
  

    const About = styled(Box)`
        display: flex;
        text-wrap: nowrap;
        align-items: center;
        gap: 0.2rem;
        margin-left: 1rem;
        margin-top: 0.2rem;
        & > svg {
        font-size: 1rem;
        }
        & > p {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 15rem;
            font-size: 0.8rem;
        }
    `


    const LiContent = styled(Box)`
        display: flex;
        justify-content: space-between;
        width: 20rem;
        height: 100%;
        align-items: center;
    `
    const MyProfile = styled(List)`
      background:#ccadeb;
      height:5rem;
      &:hover{
          background:#a29ba9;
          transition:0.3s;
      }
  `

  return (
    <div>
        <MyProfile onClick={()=>{setOpenProfile(true)}} >
            <ListItem>
                <LogoImg src={AccountProfileImage} draggable='false' alt="dp" />
                <LiContent>
                    <Box>
                        <Name>{Account.name}</Name>
                        <About>
                            <Typography>
                                There is no place like 127.0.0.1
                            </Typography>
                        </About>
                    </Box>
                </LiContent>
            </ListItem>
        </MyProfile>
    </div>
  )
}

export default SettingProfile