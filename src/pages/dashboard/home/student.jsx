import { Box, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import BarGraph from '../../../components/graphs/bar-graph';
import CustomizedTables from '../../../components/graphs/custom';
import LineGraph from '../../../components/graphs/line-graph';
import PieGraph from '../../../components/graphs/pie-graph';
import UsersList from '../../../components/graphs/user-list';
import Widget from '../../../components/widget/widget';

export default function StudentDashboard() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (

    <Grid container spacing={2}>



    </Grid>
  );
}