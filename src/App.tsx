import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import {Foundation} from './components/Foundation'
import blue from '@material-ui/core/colors/blue';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiPaper : {
            root : {
              /*backgroundImage: prefersDarkMode ? `linear-gradient(147deg, #000000 0%, #434343 64%)` : ``,*/
            }
          },
        },
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: prefersDarkMode ? '#90caf9' : blue[500],
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Foundation} />
            <Route path="/gallery" component={() => { 
              window.location.href = 'https://jhasubhash.github.io/gallery/'; 
              return null;
            }} exact/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
