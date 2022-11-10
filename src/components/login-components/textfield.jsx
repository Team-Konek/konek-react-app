import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function LoginTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: 400 },
        borderColor: "#fff",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="txt-user"
        label="Username"
        name="uname"
        InputLabelProps={{className: 'txt_user'}}
        />
      <TextField 
        id="txt-pass" 
        label="Password" 
        type="password"
        name="pass"
        InputLabelProps={{className: 'txt_pass'}}
      />
    </Box>
  );
}