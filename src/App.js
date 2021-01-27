import React, { useState, useEffect } from 'react';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import Home from './Home';

const useStyle = makeStyles({
  root: {     
  },
});   

function App() {
    const [photos, setPhotos] = useState();
    // const [search, setSeach] = useState();

    useEffect(() => {
      let api_key = 
      '563492ad6f9170000100000101513bc261e349cb8411e9a420c4de69'
      axios.defaults.headers.Authorization = api_key 
      axios.get('https://api.pexels.com/v1/search?query=nature&per_page=10')
        .then((res) => {
          const images = res.data;
          setPhotos(images);
        });
    }, []);
    
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
      <Home images={photos}/>
    </ThemeProvider>
  );
}
export default App;
