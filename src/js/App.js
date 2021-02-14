import '../css/App.css';
import React, {useEffect} from 'react';
import loadable from '@loadable/component'
import 'react-typist/dist/Typist.css';
import { faUser, faBriefcase, faCamera, faUserGraduate, faAddressBook, faCaretRight, faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile, BrowserView } from "react-device-detect";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-175515238-2');
  ReactGA.pageview(window.location.pathname);
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});


const About = loadable(() => import(/* webpackPrefetch: true */ './About'), {resolveComponent: (mod) => mod.About});
const Work = loadable(() => import(/* webpackPrefetch: true */ './Work'), {resolveComponent: (mod) => mod.Work});
const Life = loadable(() => import(/* webpackPrefetch: true */ './Life'), {resolveComponent: (mod) => mod.Life})
const Blog = loadable(() => import(/* webpackPrefetch: true */ './Blog'), {resolveComponent: (mod) => mod.Blog})

function App() {
  const classes = useStyles();

  useEffect(() => {
    //setParentHeight(parentRef.current.offsetWidth);
    //setParentWidth(parentRef.current.offsetWidth);
    Blog.preload();
    About.preload();
    Work.preload();
    Life.preload();
    initializeReactGA();
  });

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <div className={classes.root}>
      <Grid container>
        HELLO WORLD !!!
      </Grid>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
