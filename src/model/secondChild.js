import React, { useContext } from 'react';
import AppContext from './context';

function SecondChild() {
  let contextValue = useContext(AppContext);
  console.log('contextValue', contextValue);
  return (
    <div>
      <div>SecondChild</div>
      <h1>
        contextValue: {contextValue.user.age}
      </h1>
    </div>
  )
}

export default SecondChild;
