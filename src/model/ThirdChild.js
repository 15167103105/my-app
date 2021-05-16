import React from 'react';
import { connect } from './redux';

const ThirdChild = connect(state => {
  return {
    group: state.group
  }
})(({group}) => {
  console.log('ThirdChild');
  return (
    <div>
      <div>ThirdChild</div>
      <h1>
      group: {group}
      </h1>
    </div>
  )
})

export default ThirdChild;
