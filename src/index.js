import React from 'react';
import ReactDOM from 'react-dom';
import First from './components/First';
import WithParameter from './components/WithParameter';
import './index.css';

ReactDOM.render(
  <div>
    <First />
    <WithParameter title='Title' subtitle='Subtitle' />
  </div>,
  document.getElementById('root')
);
