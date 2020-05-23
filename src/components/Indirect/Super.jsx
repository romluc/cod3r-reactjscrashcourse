import React from 'react';
import Sub from './Sub';

export default (props) => {
  const whenClick = (valueFromSub) => {
    console.log(valueFromSub);
    console.log('Action!');
  };
  return (
    <div>
      <h4>Value</h4>
      <Sub whenClick={whenClick}></Sub>
    </div>
  );
};
