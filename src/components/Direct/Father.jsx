import React from 'react';
import Child from './Child';

export default (props) => (
  <div>
    <Child {...props}>
      <strong>John</strong>
    </Child>
    <Child surname={props.surname}>Jane</Child>
    <Child surname='Doe'>David</Child>
  </div>
);
