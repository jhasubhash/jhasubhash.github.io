import '../css/Home.css';
import '../css/Common.css';
import React, {useEffect} from 'react';
import loadable from '@loadable/component'
import 'react-typist/dist/Typist.css';
import { faUser, faBriefcase, faCamera, faUserGraduate, faAddressBook, faCaretRight, faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, responsiveFontSizes, withTheme } from "@material-ui/core";
import ReactGA from 'react-ga';
import {Footer} from "./Footer.js";

function initializeReactGA() {
  ReactGA.initialize('UA-175515238-2');
  ReactGA.pageview(window.location.pathname);
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  nav: {
    justifyContent:"center",
  },
}));

let theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
theme = responsiveFontSizes(theme);


const Landing = loadable(() => import(/* webpackPrefetch: true */ './Landing'), {resolveComponent: (mod) => mod.Landing})
const About = loadable(() => import(/* webpackPrefetch: true */ './About'), {resolveComponent: (mod) => mod.About});
const Work = loadable(() => import(/* webpackPrefetch: true */ './Work'), {resolveComponent: (mod) => mod.Work});
const Life = loadable(() => import(/* webpackPrefetch: true */ './Life'), {resolveComponent: (mod) => mod.Life})
const Blog = loadable(() => import(/* webpackPrefetch: true */ './Blog'), {resolveComponent: (mod) => mod.Blog})

function Home() {
  const classes = useStyles();
  const [pageId, setPageId] = React.useState(1);

  useEffect(() => {
    //setParentHeight(parentRef.current.offsetWidth);
    //setParentWidth(parentRef.current.offsetWidth);
    Landing.preload();
    Blog.preload();
    About.preload();
    Work.preload();
    Life.preload();
    initializeReactGA();
  });

  const loadPage = (pageId) => {
    setPageId(pageId);
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="Home">
      <div className={classes.root}>
        { pageId === 1 && <Landing/> }
        { pageId === 5 && <About/> }
        <Footer loadPage={loadPage}/>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Home;
