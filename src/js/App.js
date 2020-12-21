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

const Profile = loadable(() => import(/* webpackPrefetch: true */ './Profile'), {resolveComponent: (mod) => mod.Profile})
const AboutMe = loadable(() => import(/* webpackPrefetch: true */ './AboutMe'), {resolveComponent: (mod) => mod.AboutMe});
const Career = loadable(() => import(/* webpackPrefetch: true */ './Career'), {resolveComponent: (mod) => mod.Career});
const Education = loadable(() => import(/* webpackPrefetch: true */ './Education'), {resolveComponent: (mod) => mod.Education})
const Photos = loadable(() => import(/* webpackPrefetch: true */ './Photos'), {resolveComponent: (mod) => mod.Photos})
const Contact = loadable(() => import(/* webpackPrefetch: true */ './Contact'), {resolveComponent: (mod) => mod.Contact})
const Blog = loadable(() => import(/* webpackPrefetch: true */ './Blog'), {resolveComponent: (mod) => mod.Blog})

function App() {
  const classes = useStyles();

  const [aboutMe, setAboutMe] = React.useState(false);
  const [career, setCareer] = React.useState(false);
  const [education, setEduction] = React.useState(false);
  const [camera, setCamera] = React.useState(false);
  const [contact, setContact] = React.useState(false);
  const [leftSpace, setLeftSpace] = React.useState(false);
  const [rightSpace, setRightSpace] = React.useState(false);
  const [parentHeight, setParentHeight] = React.useState(0);
  const [parentWidth, setParentWidth] = React.useState(0);
  
  const onIconClick = (id) => {
    if(id === 'aboutme'){
      setAboutMe(!aboutMe);
      setCareer(false);
      setEduction(false);
      setCamera(false);
      setContact(false);
    }else if(id === 'education'){
      setAboutMe(false);
      setCareer(false);
      setEduction(!education);
      setCamera(false);
      setContact(false);
    }else if(id === 'career'){
      setAboutMe(false);
      setCareer(!career);
      setEduction(false);
      setCamera(false);
      setContact(false);
    }else if(id === 'camera'){
      setAboutMe(false);
      setCareer(false);
      setEduction(false);
      setCamera(!camera);
      setContact(false);
    }else if(id === 'contact'){
      setAboutMe(false);
      setCareer(false);
      setEduction(false);
      setCamera(false);
      setContact(!contact);
    }
    if(id === "leftSpace"){
      setLeftSpace(!leftSpace);
    }
    if(id === "rightSpace"){
      setRightSpace(!rightSpace);
    }
  }
  useEffect(() => {
    setParentHeight(parentRef.current.offsetWidth);
    setParentWidth(parentRef.current.offsetWidth);
    Blog.preload();
    Profile.preload();
    AboutMe.preload();
    Career.preload();
    Education.preload();
    Photos.preload();
    Contact.preload();
    initializeReactGA();
  });

  const parentRef = React.useRef(null);
  const childRef = React.useRef(null);

  let profileStyle = {
    clipPath : 'circle(48%)'
  }

  const profileBorderStyle = {
    backgroundColor : "#2e2e2d",
    clipPath : 'circle(49%)'
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <div className={classes.root}>
      <Grid container>
        <Grid item sm>
          <BrowserView>
            {leftSpace && <Blog/>}
          </BrowserView>
        </Grid>

        <Grid item xs className="main">
        <Grid container >
        <Grid item xs={1} sm={2} className="leftIcon">
          <BrowserView>
            <FontAwesomeIcon icon={faCaretLeft} className="iconStyle" id="leftSpace" style={{ transform : leftSpace ?"scale(0.80)":"scale(1)"}} onClick={(e)=>{onIconClick(e.currentTarget.id)}}/>
          </BrowserView>
        </Grid>
        <Grid item xs={10} sm={8}>
          <div style={profileBorderStyle}>
            <div ref = {parentRef} style={profileStyle}>
              <Profile width={parentWidth/2} height={parentHeight/2}/>
            </div>
          </div>
        </Grid>
        <Grid item xs={1} sm={2} className="rightIcon">
          <BrowserView>
            <FontAwesomeIcon icon={faCaretRight} className="iconStyle" id="rightSpace" style={{ transform : rightSpace ?"scale(0.80)":"scale(1)"}} onClick={(e)=>{onIconClick(e.currentTarget.id)}}/>
          </BrowserView>
         </Grid>
        </Grid>

          <div className="iconList">
            <FontAwesomeIcon icon={faUser} className="iconStyle" id="aboutme" style={{ transform : aboutMe ?"scale(0.80)":"scale(1)"}} onClick={(e)=>{onIconClick(e.currentTarget.id)}} onMouseOver={(e)=>{AboutMe.preload()}} />
            <FontAwesomeIcon icon={faUserGraduate} className="iconStyle" id="education" style={{ transform : education ?"scale(0.80)":"scale(1)"}} onClick={(e)=>{onIconClick(e.currentTarget.id)}}/>
            <FontAwesomeIcon icon={faBriefcase} className="iconStyle"  id="career" style={{ transform : career ?"scale(0.80)":"scale(1)"}} onClick={(e)=>{onIconClick(e.currentTarget.id)}}/>
            <FontAwesomeIcon icon={faCamera} className="iconStyle" id="camera" style={{ transform : camera ?"scale(0.80)":"scale(1)"}} onClick={(e)=>{onIconClick(e.currentTarget.id)}}/>
            <FontAwesomeIcon icon={faAddressBook} className="iconStyle" id="contact" style={{ transform : contact ?"scale(0.80)":"scale(1)"}} onClick={(e)=>{onIconClick(e.currentTarget.id)}}/>
          </div>
          <div className="container">
          {aboutMe && <AboutMe/>}
          {career && <Career/>}
          {education && <Education/>}
          {camera && <Photos/>}
          {contact && <Contact/>}
          </div>
        </Grid>

        <Grid item sm>
          <BrowserView>
            {rightSpace && <Blog/>}
          </BrowserView>
        </Grid>
      </Grid>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
