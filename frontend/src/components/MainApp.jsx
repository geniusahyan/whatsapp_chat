import React, { useMemo, useContext } from 'react';
import WContext from '../context/WContext';
import Login from './Login';
import Message from './Message';

function MainApp() {
  const { Account } = useContext(WContext);

  const renderedComponent = useMemo(() => {
    return Account ? <Message /> : <Login />;
  }, [Account]);

  return (
    <>
      {renderedComponent}
    </>
  );
}

export default MainApp;
