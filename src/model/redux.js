import React, { useEffect, useState } from 'react'
import AppContext from './context';

let state = undefined;
let reducer = undefined;
let listeners = [];
const setState = (newState) => {
  state = newState;
  listeners.map(fn => fn(state))
};

export const createStore = (_reducer, initState) => {
  state = initState;
  reducer = _reducer;
  return store;
}

export const initState = {
  user: {
    name: 'htt',
    age: 18,
  },
  group: '前端组',
};

const store = {
  getState() {
    return state;
  },
  dispatch: (action) => {
    setState(reducer(state, action));
  },
  // 订阅
  subscribe(fn){
    listeners.push(fn);
    return () => {
      const index = listeners.indexOf(fn);
      listeners.splice(index, 1);
    }
  },
};

const dispatch = store.dispatch;

const changed = (oldState, newState) => {
  let changed = false;
  for (let key in oldState) {
    if (oldState[key] !== newState[key]) {
      changed = true;
    }
  }
  return changed;
}

export const connect = (selector, mapdispatchToProps) => (Component) => {
  return (props) => {
    const [, update] = useState({});
    const data = selector ? selector(state) : {state};
    const dispatchers = mapdispatchToProps ? mapdispatchToProps(dispatch) : dispatch;
    // 有状态变化时，告诉所有订阅者变化
    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        const newState = selector ? selector(state) : { state };
        if (changed(data, newState)) {
          update({});
        }
      });
      // 注意：这里最好取消订阅，否则在selector变化时会出现重复订阅
      return unsubscribe;
    }, [selector]);
    return <Component {...props} {...data} {...dispatchers} dispatch={dispatch} />
  }
}


export const Provider = ({ store, children}) => {
  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  )
}
