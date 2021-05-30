import { Button } from 'antd';
import React, { useState } from 'react';
import './App.css';
import { LoginScreen } from './login';
import { ProjectListScreen } from './screens/project-list';


function App() {
  const [state, setstate] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        {
          state && <ProjectListScreen></ProjectListScreen>
        }
        <LoginScreen></LoginScreen>
        <Button type='primary' onClick={() => setstate(!state)}>按钮</Button>
      </header>
    </div>
  );
}

export default App;
