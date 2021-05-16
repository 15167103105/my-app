import React from 'react';
import FirstChild from './FirstChild';
import SecondChild from './secondChild';
import AppContext from './context';
import { store } from './redux';
import ThirdChild from './ThirdChild';
import ForthChild from './FourthChild';

export default function PickerExample() {
    return (
        <AppContext.Provider value={store}>
            <FirstChild />
            <SecondChild />
            <ThirdChild />
            <ForthChild />
        </AppContext.Provider>
    )
}
