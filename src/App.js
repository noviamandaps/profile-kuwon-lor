import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fasilitas from './Pages/Fasilitas';
import Home from './Pages/Home';
import Infografis from './Pages/Infografis';
import Pemerintahan from './Pages/Pemerintahan';
import UMKM from './Pages/UMKM';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pemerintahan" element={<Pemerintahan/>}/>
        <Route path="/infografis" element={<Infografis/>}/>
        <Route path="/umkm" element={<UMKM/>}/>
        <Route path="/fasilitas" element={<Fasilitas/>}/>
        <Route path="/galeri" element={{}}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;