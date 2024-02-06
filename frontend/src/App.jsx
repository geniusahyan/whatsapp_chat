import React from 'react'
import Login from './components/Login'
import { GoogleOAuthProvider } from '@react-oauth/google' 
import Message from './components/Message';

function App() {
  const clientId = import.meta.env.GOOGLE_CLIENT_ID || "530508373190-1tstvndeg0hid0clr68r0t3mumjk2ef9.apps.googleusercontent.com" ;
  return (
    <>
     <GoogleOAuthProvider clientId={clientId} >
        {/* <Login /> */}
        <Message />
     </GoogleOAuthProvider>
    </>
  )
}

export default App