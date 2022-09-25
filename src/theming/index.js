import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#532267",
      light:"#9c27b0",
      dark: "#7b1fa2"
    },
    white: {
      main: "#fff", 
    },
    gray: {
      main: "#eee"
    }
  },
  typography:{
    fontFamily: ["Poppins","Cursive"].join(",")
  }
});

export default theme;