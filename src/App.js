import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation';
import { LIST_ROCKETS } from './redux/Rockets/rocket';
import Mission from './pages/Mission';
import Profile from './pages/Profile';
import RocketList from './pages/RocketList';
import { LIST_MISSIONS } from './redux/Missions/mission';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LIST_ROCKETS());
  }, [dispatch]);

  useEffect(() => {
    dispatch(LIST_MISSIONS());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketList />} />
        <Route path="mission" element={<Mission />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
