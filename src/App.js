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
  
    useEffect(() => {
      axios
        .get("https://api.pexels.com/v1/search?query=nature&per_page=1")
        .then((res) => {
          const images = res.data;
          setPhotos(images);
        });
    }, []);
  
    //   return (
    //     <div>
    //       <ul>{photos && photos.map((images) => <li>{images.name}</li>)}</ul>
    //     </div>
    //   );
    // }
  
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
