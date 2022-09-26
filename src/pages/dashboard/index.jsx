import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '../../components/drawer/drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '../../components/appbar/appbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Classroom from './classroom';
import User from './user';
import Logs from './logs';
import Home from './home';
import "./index.css";
import { Container } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function DashBoard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = (b) => {
    setOpen(b);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: "100vh", overflowY: "auto", backgroundColor: "#eee" }} >
      <CssBaseline />
      <AppBar open={open} onMenuClick={handleDrawerOpen} />
      <Drawer open={open} onDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/user" element={<User />} />
            <Route path="/Logs" element={<Logs />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
      </Box>
    </Box>
  );
}
