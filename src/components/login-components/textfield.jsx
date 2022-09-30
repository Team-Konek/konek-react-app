import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function LoginTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: 400 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
      />
      <TextField 
        id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        type="password"
      />
    </Box>
  );
}
