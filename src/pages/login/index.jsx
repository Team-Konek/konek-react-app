import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/logo";
import "./style.css";
import LoginTextFields from "../../components/login-components/textfield";

function Login() {
  return (
    <div className="login">
      <div className="login-form">
        <div className="landing-header">
          <a href="/">
            <Logo lg />
          </a>
        </div>
        <div id="form-header">
          <h2>KONEK</h2>
        </div>
        <div id="form-wrapper">
          <form id="join-form" autoComplete="off">
            <div className="textfields">
              <LoginTextFields />
            </div>

            <div className="signup-text">
              <Typography>
                Dont have an account yet?
                <Link to="/" className="signup-link">
                  {" "}
                  Sign up
                </Link>
              </Typography>
            </div>

            <div className="button">
              <Link to="/dashboard">
                <Button
                  className="btn-submit"
                  InputLabelProps={{ className: "btn_submit" }}
                >
                  Login
                </Button>
              </Link>
            </div>

            <div id="apis">
              <Link to="/google">
                <Button id="api-google-btn" type="submit">
                  Sign in with google
                </Button>
              </Link>
              <Link to="/facebook">
                <Button id="api-fb-btn" type="submit">
                  Sign in with facebook
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
