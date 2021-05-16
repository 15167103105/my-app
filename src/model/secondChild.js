import React from 'react';
import { connect } from './redux';

const SecondChild = connect(state => {
  return {
    user: state.user
  }
})(({user}) => {
  return (
    <div>
      <div>SecondChild</div>
      <h1>
        age: {user.age}
      </h1>
    </div>
  )
})

export default SecondChild;
