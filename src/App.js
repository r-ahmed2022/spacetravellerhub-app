import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
