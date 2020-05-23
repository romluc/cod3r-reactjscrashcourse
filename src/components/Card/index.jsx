import React from 'react';
import './styles.css';

export default ({ title, children, color }) => {
  return (
    <div
      className='card'
      style={{
        borderColor: color || '#333',
      }}
    >
      <div className='content'>{children}</div>
      <div
        className='footer'
        style={{
          backgroundColor: color || '#333',
        }}
      >
        {title}
      </div>
    </div>
  );
};
