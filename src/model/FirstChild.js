import React, { useContext } from 'react';
import AppContext from './context';
import SecondChild from './secondChild';

function FirstChild() {
  let contextValue = useContext(AppContext);
  console.log('contextValue', contextValue);
  return (
    <div>
      <div>FirstChild</div>
      <h1>
        contextValue: {contextValue.user.name}
      </h1>
      <SecondChild />
    </div>
  )
}

export default FirstChild
