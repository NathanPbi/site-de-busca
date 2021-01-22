import React from 'react';

import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';

import Home from './Home';

const useStyle = makeStyles({
  root: {     
  },
});   

function App() {
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5',
      },
    },
  });

  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}></div>
      <Home />
    </ThemeProvider>
  );
}

export default App;
