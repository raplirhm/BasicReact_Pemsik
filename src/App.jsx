import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/home" element={<Home/>} />
          </Routes>
      </Router>
  );
};


export default App;


