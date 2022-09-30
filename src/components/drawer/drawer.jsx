import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ClassIcon from '@mui/icons-material/Class';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import List from '@mui/material/List';
import DrawerListItem from './list-item';
import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import "./drawer.css";

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


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function MiniDrawer({ open }) {

  const role = "instructor";

  const getMenuItems = (role) => {
    if (role === "admin") {
      return [
        { text: "Home", icon: HomeIcon, path: "" },
        { text: "Classroom", icon: ClassIcon, path: "classroom" },
        { text: "User", icon: PersonIcon, path: "user" },
        { text: "Logs", icon: ReceiptLongIcon, path: "logs" }
      ];

    } else if (role === "student") {
      return [
        { text: "Home", icon: HomeIcon, path: "" },
        { text: "Classroom", icon: ClassIcon, path: "classroom" },
      ];
    } else if (role === "instructor") {
      return [
        { text: "Home", icon: HomeIcon, path: "" },
        { text: "Classroom", icon: ClassIcon, path: "classroom" },
      ];
    } else
      throw new Error("Invalid Role");
  };

  const items = getMenuItems(role);

  const navigate = useNavigate();

  const location = useLocation();
  return (
    <>
      <Drawer variant="permanent" open={open} classes={{ paper: "drawer-container" }} >
        <DrawerHeader>

          {/* TBA */}

        </DrawerHeader>


        <Divider />


        <List className="padding">
          {items.map((item, index) => (
            <DrawerListItem
              key={item.text}
              open={open}
              text={item.text}
              icon={item.icon}
              onClick={() => navigate(item.path)}
              selected={location.pathname.replace("/dashboard", "").replace("/", "") === item.path}
            // hideBorderTop={index === 0}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
}
