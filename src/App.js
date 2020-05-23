import React from 'react';
import WithParameter from './components/WithParameter';
import WithChildren from './components/WithChildren';
import Card from './components/Card';
import Repetition from './components/Repetition';
import Father from './components/Direct/Father';

import './App.css';

export default (props) => (
  <div className='app'>
    <Card title='#1 - Exercise Asdf' color='#900c3f'>
      Exercise #1
    </Card>
    <Card title='#2 - Component with parameter' color='#dae1e7'>
      <WithParameter title='Component' subtitle='with parameters' />
    </Card>
    <Card title='#3 - Component with children' color='#142850'>
      <WithChildren>
        <ul>
          <li>Child 1</li>
          <li>Child 2</li>
          <li>Child 3</li>
        </ul>
      </WithChildren>
    </Card>
    <Card title='#4 - Iteration with map' color='#7ebdb4'>
      <Repetition />
    </Card>
    <Card title='#7 - Direct communication' color='#f6d198'>
      <Father />
    </Card>
  </div>
);
