import React, { useState } from 'react';
import FirstChild from './FirstChild';
import AppContext from './context';

export default function PickerExample() {
    const [appState, setAppState] = useState({
        user: {
            name: 'htt',
            age: 18,
        }
    })
    let contextValue = {
        appState,
        setAppState,
    }
    return (
        <AppContext.Provider value={contextValue}>
            <FirstChild />
        </AppContext.Provider>
    )
}
