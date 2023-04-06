import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CentresList from './components/Centers';
import Customer from './components/Customer';
import Rockets from './components/Rockets';
import Spacecraft from './components/Spacecraft';
import HomePage from './pages/Home';


const App = () => {
  return (
    <div>
      <Router>
      <Link to="/">Home</Link>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/centres" element={<CentresList/>} />
        <Route path="/spacecraft" element={<Spacecraft/>} />
        </Routes>
    </Router>
      
    </div>
  );
}

export default App;
