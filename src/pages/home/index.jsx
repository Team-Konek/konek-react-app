import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/logo";
import "./style.css";

function Home() {
  return (
    <div className="home">
      <div className="landing header">
        <a href="#">
          <Logo lg />
        </a>

        {/* <div className="header-btn">
            <ul>
                <Link className="login-btn" to="/lobby">SignUp/Login</Link>
            </ul>
          </div> */}

      </div>

      <div className="center-box">
        <Typography variant="h1" component="h1" className="color-swap">
          Online Learning
        </Typography>

        <Typography variant="title" component="h3" className="title">
          Made More Fun!
        </Typography>

        <Typography variant="subtitle1" component="p" className="subtitle" mt={5}>
          KONEK lets teachers and students conduct a video conferencing session
          for their lesson discussions and testing the students on what they have
          learned with regards to their lesson in a form of
          enjoyable and interactive games
        </Typography>
        <Link to="/dashboard">
          <Button variant="outlined" size="large" className="btn">KONEK</Button>
        </Link>
      </div>
    </div>

  );
}


export default Home;
