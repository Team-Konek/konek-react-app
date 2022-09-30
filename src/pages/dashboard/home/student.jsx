import { Grid } from '@mui/material';
import React from 'react';
import ClassroomCard from '../../../components/cards/classroom-card';
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
      <Grid item xs={12} md={12}>
        <Widget title="Live Porno" loading={loading} padded>
          <div className="vertical-scroll">
            <div className="card-list">
              {Array(1).fill(null).map(() => (
                <ClassroomCard
                  image="https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB"
                  title="Monkey"
                  description="You will learn how to communicate with monkey"
                  onJoin={() => {
                  }}
                />))}
            </div>
          </div>
        </Widget>
      </Grid>
    </Grid>
  );
}