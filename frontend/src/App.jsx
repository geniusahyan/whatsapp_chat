import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import { GoogleOAuthProvider } from '@react-oauth/google' 
import Message from './components/Message';
import WContextProvider from './context/WContextProvider';

function App() {

  const [Loggedtest, setLoggedtest] = useState(null)

  useEffect(() => {
    const Logged = localStorage.getItem('token');
    if (Logged) {
      setLoggedtest(true);
    } else {
      setLoggedtest(false);
    }
  }, [])
  

  const clientId = import.meta.env.GOOGLE_CLIENT_ID || "664189829092-9p8o04riteukjd7un6k9dr6ukn5g9ok1.apps.googleusercontent.com" ;
  return (
    <WContextProvider>
     <GoogleOAuthProvider clientId={clientId} >
      {
        Loggedtest? <Message /> : <Login />
      }
     </GoogleOAuthProvider>
    </WContextProvider>
  )
}

export default App