import React from 'react';
import FirstChild from './FirstChild';
import SecondChild from './secondChild';
import { createStore, reducer, initState, Provider } from './redux';
import ThirdChild from './ThirdChild';
import ForthChild from './FourthChild';

// createStore 用户初始化reducer和state
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
