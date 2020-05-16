import React from 'react';
import './styles.css';

export default ({ title, children }) => (
  <div className='card'>
    <div className='content'>{children}</div>
    <div className='footer'>{title}</div>
  </div>
);
