import { Alert, Button, IconButton, Snackbar } from '@mui/material';
import React from 'react';
import AdminDashboard from './admin';
import InstructorDashboard from './instructor';
import StudentDashboard from './student';
import CloseIcon from '@mui/icons-material/Close';
import "./index.css";


export default function Home() {

  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setMessage("Jude Kalbo");
    }, 3000);
  }, []);

  React.useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  }, [message]);


  const handleClose = () => {
    setMessage("");
  };

  const renderDashboard = (role) => {
    if (role === "admin") {
      return <AdminDashboard />;

    } else if (role === "student") {
      return <StudentDashboard />;

    } else if (role === "instructor") {
      return <InstructorDashboard />;
    } else
      throw new Error("Invalid Role");
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  return (
    <div className="dashboard-home">
      {/* <Alert severity="warning" sx={{ marginBottom: 3 }}>
        Service Maintenance!!!
      </Alert> */}
      {renderDashboard("student")}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={!!message}  
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
}