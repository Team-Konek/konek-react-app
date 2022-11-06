import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes, Navigate } from "react-router-dom";
import Drawer from "../../components/drawer/drawer";
import AppBar from "../../components/appbar/appbar";
import Classroom from "./classroom";
import User from "./user";
import Logs from "./logs";
import Home from "./home";
import "./index.css";
import WebSocketClient from "../../components/web-socket/web-socket";

const SOCKET_URL = "http://localhost:5000";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function DashBoard() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = (b) => {
    setOpen(b);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMessage = (msg) => {
    // eslint-disable-next-line no-alert
    alert(msg.text);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflowY: "auto",
        backgroundColor: "#eee",
      }}
    >
      <CssBaseline />
      <WebSocketClient url={SOCKET_URL} onReceive={handleMessage} />
      <AppBar open={open} onMenuClick={handleDrawerOpen} />
      <Drawer open={open} onDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "80%" }}>
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
