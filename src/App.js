import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation';
import Mission from './pages/Mission';
import MyProfile from './pages/MyProfile';
import Rocket from './pages/Rocket';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="mission" element={<Mission />} />
        <Route path="profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
