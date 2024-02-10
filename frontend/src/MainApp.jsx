import React, { useMemo, useContext } from 'react';
import WContext from './context/WContext';
import Login from './components/Login';
import Message from './components/Chat/Message';
function MainApp() {
    const { Account } = useContext(WContext);

    const renderedComponent = useMemo(() => {
      return Account ? <Message /> : <Login />;
    }, [Account]);
  return (
    <div>
        <>
            {renderedComponent}
        </>
    </div>
  )
}

export default MainApp