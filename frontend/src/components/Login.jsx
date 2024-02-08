import React, { useContext } from 'react'
import { AppBar, styled, Box, Dialog, Typography, List, ListItem, ListItemText} from '@mui/material'
import Portfolio from '../../public/portfolio.png'
import { GoogleLogin } from '@react-oauth/google'
import { addUser } from '../api/api'
import { jwtDecode } from 'jwt-decode'
import WContext from '../context/WContext'
export default function Login() {

    const {setAccount} = useContext(WContext);

    const LoginSuccess = (data)=>{
        const dataDecoded = jwtDecode(data.credential);
        setAccount(dataDecoded);
        localStorage.setItem('token',data.credential)
        addUser(dataDecoded);
    }
    const LoginError = ()=>{
        console.log('login failed')
    }










    const Header = styled(AppBar)`
        height:14rem;
        width:100%;
        box-shadow:none;
        background-color:#00a884;
    `
    const Wrapper = styled(Box)`
        margin:0;
        padding:0;
    `
    const Left = styled(Box)`
        height:100%;
        box-sizing: border-box;
        width:60%;
        padding: 3rem;
        user-select: none;
        `
    const Right = styled(Box)`
        height:100%;
        width:40%;
        box-sizing: border-box;
        padding: 1rem;
    `
    const Dialogbox = {
        position: 'absolute',
        top: '48%',
        left: '47%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        maxWidth: '100%',
        height:'80%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'flex-wrap',
        color: '#525252'
    }
    const ListLi = styled(List)`
        margin-top:1rem;
    `
    const Qrcode = styled('img')({
        width: '20rem',
        height: '60%'
    })
    const GoogleLog = styled(Box)`
        width: 12rem;
        heigth:1rem;
        margin: 1rem auto;
    `
    const Ahyan = styled(Typography)`
        text-align:center;
        font-size:2rem;
        font-weight:bold;
        color:#fff;
        margin-top:1rem;
    `


  return (
    <>
    <Wrapper>
        <Header>
            <Ahyan>
                Ahyan
            </Ahyan>
        </Header>
        <Dialog open={true} hideBackdrop PaperProps={{sx:Dialogbox}} >
            <Left>
                <Typography variant='h5' > To use whatsapp on your device </Typography>
                <ListLi>
                    <ListItem>
                        <ListItemText primary="1. Install whatsapp on your device" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2. Open whatsapp on your device" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="3. Go to settings" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="4. Kuch mat karo Direct Google se Login karlo" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="5. Don't do anything just Logged in using Google " />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="6. Scan function nahi hai but QR-Scanner se scan kar sakte ho 💝 " />
                    </ListItem>
                </ListLi>

                <GoogleLog>
                    <GoogleLogin onSuccess={LoginSuccess} onError={LoginError} />
                </GoogleLog>
            </Left>
            <Right>
                <Qrcode src={Portfolio} width={'12rem'} draggable='false' alt="qrcode" />
            </Right>
        </Dialog>
    </Wrapper>
    </>
  )
}
