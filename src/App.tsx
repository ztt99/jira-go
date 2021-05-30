import { Button } from 'antd';
import React, { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { LoginScreen } from './login';
import { ProjectScreen } from './screens/project';
import { ProjectListScreen } from './screens/project-list';


function App() {
  const [state, setstate] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/projects' element={<ProjectListScreen></ProjectListScreen>}></Route>
            <Route path='/projects/:projectId/*' element={<ProjectScreen></ProjectScreen>}></Route>
          </Routes>
        </Router>

        {/* <LoginScreen></LoginScreen> */}
        {/* <Button type='primary' onClick={() => setstate(!state)}>按钮</Button> */}

      </header>
    </div>
  );
}

export default App;
