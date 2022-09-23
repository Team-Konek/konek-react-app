import React from "react";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import "./index.css";
import Logo from "../../components/logo/logo";


function Home() {
  return (
    <div className="home">
      <Container maxWidth="xl"></Container>
      <header>
          <a href="#">
            <Logo />
          </a>
          <div className="header-btn">
            <ul>
                <Link className="login-btn" to="/lobby">SignUp/Login</Link>
            </ul>
          </div>
      </header>

      <div className="text-box">
        <h2 className="text1">Online Learning</h2>
        <h2 className="text2">Made More Fun!</h2>
        <p>
          KONEK lets teachers and students conduct a video conferencing session <br></br>
          for their lesson discussions and testing the students on what they've <br></br>
          learned with regards to their lesson in a form of <br></br>
          enjoyable and interactive games <br></br>
        </p>
        <a href="#" className="btn">KONEK</a>
      </div>
    </div>
    
  );
}


export default Home;
