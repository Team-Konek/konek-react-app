import React from "react";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import teacher from "./img/student.png";

function Aesthetic() {
  return (
    <Box>
      <CardMedia
        component="img"
        height="500"
        image={teacher}
        alt="Paella dish"
        sx={{ marginTop: 5, borderRadius: 100, marginLeft: 5 }}
      />
    </Box>
  );
}

export default Aesthetic;
