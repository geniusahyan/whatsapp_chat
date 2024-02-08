import React, { useContext } from 'react'
import WContext from '../context/WContext';
import Login from './Login';
import Message from './Message'
function MainApp() {
    const {Account} = useContext(WContext);

  return (
    <>
        {Account ? <Message /> : <Login />}
    </>
  )
}

export default MainApp