import { Button } from 'antd';
import React from 'react';
import './App.css';
import { LoginScreen } from './login';
import { ProjectListScreen } from './screens/project-list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectListScreen></ProjectListScreen>
        <LoginScreen></LoginScreen>
        <Button type='primary'>阿牛</Button>
      </header>
    </div>
  );
}

export default App;
