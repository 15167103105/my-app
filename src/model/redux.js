import React, { useContext, useEffect, useState } from 'react'
import AppContext from './context';

export const store = {
  state: {
    user: {
      name: 'htt',
      age: 18,
    }
  },
  setState(newState) {
    store.state = newState;
    store.listeners.map(fn => fn(store.state))
  },
  listeners: [],
  // 订阅
  subscribe(fn){
    store.listeners.push(fn);
    return () => {
      const index = store.listeners.indexOf(fn);
      store.listeners.splice(index, 1);
    }
  },
};

export const reducer = (state, {action, payload}) => {
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

export const connect = (Component) => {
  return (props) => {
    const {state, setState} = useContext(AppContext);
    const [, update] = useState({});
    const dispatch = (action) => {
      setState(reducer(state, action));
      update({});
    };
    // 有状态变化时，告诉所有订阅者变化
    useEffect(() => {
      store.subscribe(() => {
        update({})
      });
    }, []);
    return <Component {...props} dispatch={dispatch} state={state} />
  }
}
