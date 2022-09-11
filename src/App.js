import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './layouts/navigation';
import Home from './pages/home';
import About from './pages/about';
import DashBoard from './pages/dashboard';
import Protected from './components/routes/protected';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Protected component={DashBoard} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
