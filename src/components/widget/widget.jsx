import React from "react";
import { Paper, Typography } from "@mui/material";
import cx from "classnames";
import PropTypes from "prop-types";
import Loader from "../loader/loader";
import "./widget.css";

export default function Widget({ title, children, loading, padded }) {
  return (
    <Paper
      elevation={1}
      sx={{ height: 400, position: "relative", width: "100%" }}
    >
      {/* ONLY IF */}
      {title && (
        <Typography
          variant="h4"
          p={3}
          sx={{ fontWeight: 500, fontSize: "1.8em" }}
        >
          {title}
        </Typography>
      )}
      {loading && <Loader />}
      <div className={cx({ "widget-container": true, padded })}>{children}</div>
    </Paper>
  );
}

Widget.defaultProps = {
  title: "",
  children: "",
  loading: false,
  padded: false,
};
// Typechecking props of the MDAlert
Widget.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  loading: PropTypes.bool,
  padded: PropTypes.bool,
};
