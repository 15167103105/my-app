import React from 'react';
import FirstChild from './FirstChild';
import SecondChild from './secondChild';
import AppContext from './context';
import { store } from './redux';

export default function PickerExample() {
    return (
        <AppContext.Provider value={store}>
            <FirstChild />
            <SecondChild />
        </AppContext.Provider>
    )
}
