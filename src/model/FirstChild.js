import React from 'react';
import { connect } from './redux';

const FirstChild = connect(state => {
  return {
    user: state.user,
  }
})(({dispatch, user}) => {
  console.log('FirstChild');
  return (
    <div>
      <div>FirstChild</div>
      <button
        onClick={() => {
          dispatch({
            action: 'update',
            payload: {
              user: {
                ...user,
                name: 'htt1111',
              }
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

export default FirstChild
