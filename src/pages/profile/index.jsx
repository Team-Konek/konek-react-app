import React from "react";
import { Card, Grid } from "@mui/material";
import MyProfile from "./profile";

function IndexProfile() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Card>
          <MyProfile />
        </Card>
      </Grid>
    </Grid>
  );
}
export default IndexProfile;
