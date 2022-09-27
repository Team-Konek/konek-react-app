import { Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import "./logo.css";


export default function Logo({ lg, className }) {

  return (
    <div className={classNames({ className, logo: true, lg })}>
      {/* <CastForEducationIcon /> */}
      <img src={"/images/logo.png"} />
      <Typography
        component="span"
        variant="title"
        className="text"
        sx={{ display: { xs: 'none', sm: 'inline' } }}
      >
        KONEK
      </Typography>
    </div>
  );
}
