import React from 'react';
import { connect } from './redux';
import { connectToUser } from '../redux/connect/connectToUser';
import resolve from 'resolve';

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

const fetchUser1 = (dispatch) => {
  setTimeout(() => {
    dispatch({
      action: 'update',
      payload: {
        user: {
          age: 18,
          name: '1s后htt',
        }
      }
    })
  }, 1000);
}

const fetchUser = (updateUser) => {
  setTimeout(() => {
    updateUser({
      user: {
        age: 18,
        name: '异步函数action htt',
      }
    });
  }, 1000);
}

// const fetchPromise = () => {
//   return ajax('/user').then(response => response.data);
// }

const fetchPromise = () => {
  return new Promise((resolve, reject) => {
    resolve({
      user: {
        age: 1,
        name: 'htt promise'
      },
    });
    setTimeout(() => {
      resolve({
        data: {
          user: {
            age: 1,
            name: 'htt promise'
          },
        },
      });
    }, 1000);
  })
}

const ForthChild = connectToUser(({updateUser, user, dispatch}) => {
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
      <button
        onClick={() => {
          // 异步action如果不做处理，
          fetchUser(updateUser)
        }}
      >函数action</button>
      <button
        onClick={() => {
          // dispatch(fn)
          dispatch(fetchUser1);
        }}
      >异步修改</button>
      <button
        onClick={() => {
          // 当payload为promise
          dispatch({
            action: 'update',
            payload: fetchPromise(),
          })
        }}
      >
        异步promise
      </button>
    </div>
  )
})

export default ForthChild;
