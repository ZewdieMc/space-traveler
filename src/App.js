import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
