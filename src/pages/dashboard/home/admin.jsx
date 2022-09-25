import { Box, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import BarGraph from '../../../components/graphs/bar-graph';
import CustomizedTables from '../../../components/graphs/custom';
import LineGraph from '../../../components/graphs/line-graph';
import PieGraph from '../../../components/graphs/pie-graph';
import UsersList from '../../../components/graphs/user-list';
import Widget from '../../../components/widget/widget';


export default function AdminDashboard() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (

    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Widget title="Users" loading={loading}>
          <LineGraph />
        </Widget>
      </Grid>

      <Grid item xs={12} md={4}>
        <Widget title="Website Traffic" loading={loading}>
          <BarGraph />
        </Widget>
      </Grid>


      <Grid item xs={12} md={6}>
        <Widget loading={loading}>
          <UsersList />
        </Widget>
      </Grid>

      <Grid item xs={12} md={6}>
        <Widget loading={loading}>
          <CustomizedTables />
        </Widget>
      </Grid>

    </Grid>
  );
}