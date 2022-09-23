import { Box, Container, Grid, TextField } from '@mui/material';
import React from 'react';
import BarGraph from '../../../components/graphs/bar-graph';
import LineGraph from '../../../components/graphs/line-graph';
import "./index.css";

export default function Home() {
  return (

    <Box sx={{ width: '100%' }}>
      <Grid spacing={2}>
        <Grid item xm={8}>
          <div className="widget">
            <LineGraph />
          </div>
        </Grid>

        <Grid item xm={4}>
          <div className="widget">
            <BarGraph />
          </div>
        </Grid>

      </Grid>
    </Box>
  );
}