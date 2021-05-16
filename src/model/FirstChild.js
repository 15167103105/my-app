import React from 'react';
import { connect } from './redux';

const FirstChild = connect(state => {
  return {
    user: state.user,
  }
})(({dispatch, user}) => {

  return (
    <div>
      <div>FirstChild</div>
      <button
        onClick={() => {
          dispatch({
            action: 'update',
            payload: {
              user: {
                name: 'htt1111',
                age: 180,
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
