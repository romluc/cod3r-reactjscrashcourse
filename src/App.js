import React from 'react';
import First from './components/First';
import WithParameter from './components/WithParameter';
import WithChildren from './components/WithChildren';
import Card from './components/Card';

import './App.css';

export default (props) => (
  <div className='app'>
    <Card title='#1 - Exercise Asdf'>
      <First />
    </Card>
    <Card title='#2 - Component with parameter'>
      <WithParameter title='Component' subtitle='with parameters' />
    </Card>
    <Card title='#3 - Component with children'>
      <WithChildren>
        <ul>
          <li>Child 1</li>
          <li>Child 2</li>
          <li>Child 3</li>
        </ul>
      </WithChildren>
    </Card>
  </div>
);
