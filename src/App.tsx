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
      </header>
    </div>
  );
}

export default App;
