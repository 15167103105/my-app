import React, { useContext } from 'react';
import AppContext from './context';

function SecondChild() {
  let contextValue = useContext(AppContext);
  return (
    <div>
      <div>SecondChild</div>
      <h1>
        contextValue: {contextValue.appState.user.age}
      </h1>
    </div>
  )
}

export default SecondChild;
