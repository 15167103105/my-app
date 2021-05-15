import React from 'react';
import { connect } from './redux';

const SecondChild = connect(({state}) => {
  return (
    <div>
      <div>SecondChild</div>
      <h1>
        age: {state.user.age}
      </h1>
    </div>
  )
})

export default SecondChild;
