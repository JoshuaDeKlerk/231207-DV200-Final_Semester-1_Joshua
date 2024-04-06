import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Compare from './Pages/Compare';
import Timeline from './Pages/Timeline';



function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QWVJ0UTRpRHVsMEhKRyIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTcwNzgyNjkzNH0.tHSyl4ST6mJHfCVXi4-UruX8NliPcV8xczE3CtAUZ8Q'; // Replace 'YOUR_BEARER_TOKEN_HERE' with your actual bearer token

    axios.get('https://api.techspecs.io/v4/product/detail', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

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
