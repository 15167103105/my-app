import React, { useContext } from 'react';
import AppContext from './context';
import SecondChild from './secondChild';

function FirstChild() {
  let contextValue = useContext(AppContext);
  console.log('contextValue', contextValue);
  let { appState, setAppState } = contextValue;

  const reducer = (state, {action, payload}) => {
    switch(action) {
      case 'update':
        return {
          ...state,
          ...payload,
        }
      default:
        return state;
    }
  }
  return (
    <div>
      <div>FirstChild</div>
      <button
        onClick={() => {
          // setAppState({
          //   user: {
          //     name: 'htt11',
          //     age: 180,
          //   }
          // });
          setAppState(
            reducer(appState.user, {
              action: 'update',
              payload: {
                user: {
                  name: 'htt1111',
                  age: 180,
                }
              }
            })
          )
        }}
      >修改信息</button>
      <h1>
        contextValue: {appState.user.name}
      </h1>
      <SecondChild />
    </div>
  )
}

export default FirstChild
