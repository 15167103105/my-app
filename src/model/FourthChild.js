import React from 'react';
import { connect } from './redux';
import { connectToUser } from '../redux/connect/connectToUser';

//  简化写法
const userSelector = state => {
  return {
    user: state.user,
  }
};

const userDispatch = (dispatch) => {
  return {
    updateUser: (attrs) => dispatch({
      action: 'update',
      payload: attrs,
    })
  }
};

// const connectToUser = connect(userSelector, userDispatch);

const ForthChild = connectToUser(({updateUser, user}) => {
  return (
    <div>
      <br />
      <div>FourthChild</div>
      <button
        onClick={() => {
          updateUser({
            user: {
              ...user,
              name: 'htt1111',
            }
          })
        }}
      >修改name信息</button>
      <h1>
        name: {user.name}
      </h1>
    </div>
  )
})

export default ForthChild;
