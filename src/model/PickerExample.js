import React from 'react';
import FirstChild from './FirstChild';
import SecondChild from './secondChild';
import { createStore, initState, Provider } from './redux';
import ThirdChild from './ThirdChild';
import ForthChild from './FourthChild';

let reducer = (state = initState, {action, payload}) => {
    switch(action) {
      case 'update':
        return {
          ...state,
          ...payload,
        };
      default:
        return state;
    }
  }

// createStore 用户初始化reducer和state，创建store
const store = createStore(reducer, initState);

export default function PickerExample() {
    return (
        <Provider store={store}>
            <FirstChild />
            <SecondChild />
            <ThirdChild />
            <ForthChild />
        </Provider>
    )
}
