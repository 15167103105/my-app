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
    // useEffect(() => {
    // }, []);
    return <Component {...props} dispatch={dispatch} state={state} />
  }
}
