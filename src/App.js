import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import DashBoard from './pages/dashboard';
import Protected from './components/routes/protected';
import NotFound from './pages/not-found';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theming';
import Login from './pages/login';
import Room from './pages/room';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Protected component={DashBoard} />} >
            <Route path=":page" element={<Protected component={DashBoard} />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/" element={<Home />} exact />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
export default App;
