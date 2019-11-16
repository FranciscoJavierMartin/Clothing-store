import React from 'react';
import HomePage from './pages/home/HomePage';
import './App.module.scss';

const App: React.FC = () => {
  return (
    <div data-test='component-app'>
      <HomePage/>
    </div>
  );
}

export default App;
