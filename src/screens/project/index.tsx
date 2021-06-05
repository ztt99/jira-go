import React from 'react'
import { Navigate, Routes, Route } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { EpicScreen } from '../epic';
import { KanbanScreen } from '../kanban';

export const ProjectScreen = () => {
    return <div>
        <h1>ProjectScreen</h1>
        <Link to='kanban'>看板</Link>
        <Link to='epic'>任务组</Link>
        <Routes>
            <Route path={'kanban'} element={<KanbanScreen></KanbanScreen>}></Route>
            <Route path={'epic'} element={<EpicScreen></EpicScreen>}></Route>
            <Navigate to={'kanban'}></Navigate>
        </Routes>
    </div>
}