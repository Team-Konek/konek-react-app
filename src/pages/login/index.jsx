import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/logo";
import "./style.css";
import LoginTextFields from "../../components/login-components/textfield";

function Login() {
  return (
    <div className="login">
      <div className="login-form">
        <div className="landing-header">
          <Link to="/">
            <Logo lg />
          </Link>
        </div>
        <Box >
          <Grid id="form-header">
            <h2>KONEK</h2>
          </Grid>
          <Grid id="form-wrapper">
            <form id="join-form" autocomplete="off">
              <div className="textfields">
                <LoginTextFields />
              </div>

              <div className="signup-text">
                <Typography>
                  Don't have an account yet?{" "}
                  <Link to="/" className="signup-link">
                    {" "}
                    Sign up
                  </Link>
                </Typography>
              </div>

              <div className="button">
                <Link to="/dashboard">
                  <button
                    className="btn-submit"
                    InputLabelProps={{ className: "btn_submit" }}
                  >
                    Login
                  </button>
                </Link>
              </div>

              <div id="apis">
                <Link to="/google">
                  <Button id="api-google-btn" type="submit">
                    <img className="G-logo" src="/images/googleLogo.png" />
                    Sign in with google
                  </Button>
                </Link>
              </div>
            </form>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Login;
