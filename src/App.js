import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation';
import Mission from './pages/Mission';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="mission" element={<Mission />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
