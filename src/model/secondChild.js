import React from 'react';
import { connect } from './redux';

const SecondChild = connect(state => {
  return {
    user: state.user
  }
})(({dispatch, user}) => {
  return (
    <div>
      <div>SecondChild</div>
      <button
        onClick={() => {
          dispatch({
            action: 'update',
            payload: {
              user: {
                ...user,
                age: 180,
              }
            }
          })
        }}
      >修改age信息</button>
      <h1>
        age: {user.age}
      </h1>
    </div>
  )
})

export default SecondChild;
