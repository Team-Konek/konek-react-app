import React from 'react';
import Typography from '@mui/material/Typography';


export default function Logo() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      KONEK
    </Typography>
  );
}

