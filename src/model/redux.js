import React, { useContext, useEffect, useState } from 'react'
import AppContext from './context';

export const createStore = (_reducer, initState) => {
  store.state = initState;
  store.reducer = reducer;
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
  state: undefined,
  reducer: undefined,
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

export let reducer = (state = initState, {action, payload}) => {
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
    const {state, setState} = useContext(AppContext);
    const [, update] = useState({});
    const data = selector ? selector(state) : {state};
    const dispatch = (action) => {
      setState(store.reducer(state, action));
      update({});
    };
    const dispatchers = mapdispatchToProps ? mapdispatchToProps(dispatch) : dispatch;
    // 有状态变化时，告诉所有订阅者变化
    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        const newState = selector ? selector(store.state) : { state: store.state };
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
