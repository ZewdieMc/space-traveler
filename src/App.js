import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
