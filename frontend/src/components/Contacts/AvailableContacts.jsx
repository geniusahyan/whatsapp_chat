import { Box, Drawer, styled} from '@mui/material'
import React, { useContext } from 'react'
import Header from '../ProfileBox/Header'
import ContactList from './ContactList'
import WContext from '../../context/WContext';

function AvailableContacts() {

    const ContactArr = [1,2,3,4,5,6,7,8,7,5];

    const {OpenContact, setOpenContact} = useContext(WContext)







    const drawerStyle = {
        left: 33,
        top: 36,
        width: 485,
        height:660,
    }


    const Wrapper = styled(Box)`
        width:100%;
        height:81%;
        box-sizing:border-box;
        margin-top:8rem;
        overflow-y:scroll;
        -webkit-overflow-scrolling: touch; 
        &::-webkit-scrollbar {
            width: 0.15rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #622bb7;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
    `
  return (
    <>
        <Drawer open={OpenContact} onClose={()=>setOpenContact(false)} PaperProps={{sx: drawerStyle }} style={
            {
                zIndex:1300,
                position:'relative',
                transition:'all 0.7s ease-in-out'
            }
            } >
            <Header text={'Contacts'} onclick={()=>setOpenContact(false)}   />
            <Wrapper>
                {
                    ContactArr.map((Contact, index)=>{
                        return(
                            <ContactList key={index} />
                        )
                    })
                }
            </Wrapper>
        </Drawer>
    </>
  )
}

export default AvailableContacts