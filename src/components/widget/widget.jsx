import React from 'react';
import { Paper, Typography } from '@mui/material';
import Loader from '../loader/loader';
import cx from "classnames";
import "./widget.css";

export default function Widget({ title, children, loading, padded }) {
  return (
    <Paper elevation={1} sx={{ minHeight: 300, position: "relative", width: '100%' }}>
      {/* ONLY IF */}
      {title && (
        <Typography variant="h4" p={3} sx={{ fontWeight: 500, fontSize: "1.8em" }}>
          {title}
        </Typography>
      )}
      {loading && <Loader />}
      <div className={cx({ "widget-container": true, padded })}>
        {children}
      </div>
    </Paper >
  );
}