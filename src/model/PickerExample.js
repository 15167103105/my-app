import React from 'react';
import FirstChild from './FirstChild';
import SecondChild from './secondChild';
import AppContext from './context';
import { store } from './redux';
import ThirdChild from './ThirdChild';

export default function PickerExample() {
    return (
        <AppContext.Provider value={store}>
            <FirstChild />
            <SecondChild />
            <ThirdChild />
        </AppContext.Provider>
    )
}
