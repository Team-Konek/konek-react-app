import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import DashBoard from './pages/dashboard';
import Protected from './components/routes/protected';
import NotFound from './pages/not-found';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theming';
import Login from './components/login/login';


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Protected component={DashBoard} />} >
            <Route path=":page" element={<Protected component={DashBoard} />} />
          </Route>
          <Route path="/" element={<Home />} exact />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
export default App;
