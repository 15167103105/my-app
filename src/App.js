import React from 'react';
import './App.css';
// import Example from './pages/index/Index';
// import PickerCase from './pages/list/pickerCase';
import PickerExample from './model/PickerExample';
import 'antd-mobile/dist/antd-mobile.css'; 

function App() {
  return (
    <div className="App">
      <PickerExample />
      {/* <PickerCase /> */}
      {/* <Example /> */}
    </div>
  );
}

export default App;
