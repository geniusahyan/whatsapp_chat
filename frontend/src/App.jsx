import { GoogleOAuthProvider } from '@react-oauth/google' 
import WContextProvider from './context/WContextProvider';
import MainApp from './components/MainApp';
import Message from './components/Message';

function App() {


  const clientId = import.meta.env.GOOGLE_CLIENT_ID || "664189829092-9p8o04riteukjd7un6k9dr6ukn5g9ok1.apps.googleusercontent.com" ;
  return (
    <WContextProvider>
     <GoogleOAuthProvider clientId={clientId} >
       <MainApp />
     </GoogleOAuthProvider>
    </WContextProvider>
  )
}

export default App