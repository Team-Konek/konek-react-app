import React from "react";
import { Card, Grid } from "@mui/material";
import UserRoles from "./roles";

function Roles() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card>
          <UserRoles />
        </Card>
      </Grid>
    </Grid>
  );
}
export default Roles;
