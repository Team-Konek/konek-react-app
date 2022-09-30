import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/logo";
import "./style.css";


function Login() {
  return (
    <div className="home">
      <div className="login-form">
        <div className="landing-header">
          <a href="/">
            <Logo lg />
          </a>
        </div>
        <div id="form-header">
          <h2>KONEK </h2>
        </div>
        <div id="form-wrapper">
          <form id="join-form" autocomplete="off">
            <label>Username</label>
            <input id="txt-user" type="text" name="invite_link" required />
            <label>Password</label>
            <input id="txt-pass" type="password" name="pass" required />
            <p>
              Don't have an account yet?{" "}
              <Link to="/" className="signup-link">
                Sign up
              </Link>
            </p>
            <Link to="/room">
              <Button id="btn-submit" type="submit">Login</Button>
            </Link>
            <div id="apis">
              <Link to="/google">
                <Button id="api-google-btn" type="submit">Sign in with google</Button>
              </Link>
              <Link to="/facebook">
                <Button id="api-fb-btn" type="submit">Sign in with facebook</Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
