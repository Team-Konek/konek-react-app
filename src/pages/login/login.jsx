import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { LoginSchema } from "../../components/schema/scheme";
// import { LoginSchema } from "../schema/LoginSchema";

function Login() {
  const onSubmit = () => {
    // console.log("Submitted");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit,
  });

  return (
    <div className="landing-page">
      <div className="landing-logo">
        <img
          src="https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB"
          alt="logo"
        />
      </div>
      <div className="login-container">
        <div className="login-title">
          <h2 className="title1">CvSU Imus </h2>
          <h2 className="title2">Syllabus System</h2>
        </div>
        <div className="login-input">
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <TextField
              id="outlined-basic"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBLur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant="outlined"
              sx={{
                width: 300,
                paddingBottom: 3,
              }}
            />
            <TextField
              id="outlined-password-input"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBLur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              autoComplete="current-password"
              sx={{
                width: 300,
              }}
            />

            <div className="login-btn">
              <Button
                type="submit"
                name="login-btn"
                variant="contained"
                sx={{
                  width: 250,
                  marginTop: 3,
                  marginLeft: 3.5,
                }}
              >
                Login
              </Button>
            </div>

            <Button
              size="small"
              sx={{
                marginTop: 3,
                marginLeft: 6,
              }}
            >
              Forgot your Password?
            </Button>
            <div className="contact-admin">
              <small>*Contact an Administrator for an Account</small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
