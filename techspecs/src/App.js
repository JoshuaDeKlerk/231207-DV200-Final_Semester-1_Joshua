import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Compare from './Pages/Compare';
import Timeline from './Pages/Timeline';

function App() {
  return (
    
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Compare" element={<Compare />} />
        <Route path="/Timeline" element={<Timeline />} />
      </Routes>
    </Router>

  );
}

export default App;
