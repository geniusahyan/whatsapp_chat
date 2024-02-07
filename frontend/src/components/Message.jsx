import React from 'react'
import { Dialog, Box, styled, Divider } from '@mui/material' 
import LeftBox from './LeftBox';
import RightBox from './RightBox';

function Message() {

    const Dialogbox = {
        position: 'absolute',
        top: '46%',
        left: '47.5%',
        transform: 'translate(-50%, -50%)',
        width: '95vw',
        minWidth:'95vw',
        maxWidth: '100%',
        height:'95%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'flex-wrap',
        color: '#525252'
    }

    const Wrapper = styled(Box)`
        margin:0;
        padding:0;
        background-color:#e7e7e1;
        width:100vw;
        height:100vh;
    `

    const CustomDivider = styled(Divider)(({ theme }) => ({
        backgroundColor: '#0000ff1c', 
        height: '100%',
        width: '0.1rem',
      }));
  

  return (
    <>
        <Wrapper>
            <Dialog open={true} hideBackdrop PaperProps={{sx:Dialogbox}} >
            <LeftBox />
            <CustomDivider orientation='vertical' />
            <RightBox />
            </Dialog>
        </Wrapper>
    </>
  )
}

export default Message;