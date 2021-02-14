import '../css/Home.css';
import '../css/Common.css';
import React, {useEffect} from 'react';
import loadable from '@loadable/component'
import 'react-typist/dist/Typist.css';
import { faUser, faBriefcase, faCamera, faUserGraduate, faAddressBook, faCaretRight, faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile, BrowserView, MobileOnlyView, TabletView } from "react-device-detect";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, responsiveFontSizes, withTheme } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ReactGA from 'react-ga';
import profilePic from '../assets/profile.jpg';
import {Footer} from "./Footer.js";

function initializeReactGA() {
  ReactGA.initialize('UA-175515238-2');
  ReactGA.pageview(window.location.pathname);
}

const textAlign = isMobile ? 'center' : 'left';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  body: {
    backgroundColor: 'black',
    height: '80vh',
  },
  header: {
    backgroundColor: 'white',
    height: '20vh',
  },
  homeIntro : {
    height: '70vh',
    paddingTop: '20vh',
    textAlign: textAlign,
  },
  nav: {
    justifyContent:"center",
  },
  photo: {
    height: '150px',
  },
  profilePic: {
    top: '-10vh',
    width: '250px',
    height: '250px',
    margin: 'auto',
    left: '0',
    right: '0',
  },
}));

let theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
theme = responsiveFontSizes(theme);


const About = loadable(() => import(/* webpackPrefetch: true */ './About'), {resolveComponent: (mod) => mod.About});
const Work = loadable(() => import(/* webpackPrefetch: true */ './Work'), {resolveComponent: (mod) => mod.Work});
const Life = loadable(() => import(/* webpackPrefetch: true */ './Life'), {resolveComponent: (mod) => mod.Life})
const Blog = loadable(() => import(/* webpackPrefetch: true */ './Blog'), {resolveComponent: (mod) => mod.Blog})

function Home() {
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
    <div className="Home">
      <div className={classes.root}>
      <Grid container>
        <Grid container className={classes.header}>
          <Grid item xs={12} sm={12} md={12}>
            <div className="Header"></div>
          </Grid>
        </Grid>
        <Grid container className={classes.body}>
          <Grid item xs={12} sm={12} md={3} className={classes.photo}>
            <Avatar alt="Subhash Jha" src={profilePic} className={classes.profilePic} />
          </Grid>
          <Grid item xs={12} sm={12} md={9} className={classes.homeIntro}>
            <Typography variant="h2" component="h2" gutterBottom>
              I am Subahsh Jha
            </Typography>
            <Typography variant="h5" gutterBottom>
                Software Developer | Blogger | Artist | Ocassional Photographer
            </Typography>
            <Footer/>
          </Grid>
        </Grid>
      </Grid>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Home;
