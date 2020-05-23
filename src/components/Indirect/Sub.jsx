import React from 'react';

export default (props) => {
  return (
    <div>
      <button onClick={() => props.whenClick(Math.random())}>Alter</button>
    </div>
  );
};
