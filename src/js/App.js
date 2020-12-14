import '../css/App.css';
import React, {useEffect} from 'react';
import loadable from '@loadable/component'
import 'react-typist/dist/Typist.css';
import { faUser, faBriefcase, faCamera, faUserGraduate, faAddressBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = loadable(() => import(/* webpackPrefetch: true */ './Profile'), {resolveComponent: (mod) => mod.Profile})
const AboutMe = loadable(() => import(/* webpackPrefetch: true */ './AboutMe'), {resolveComponent: (mod) => mod.AboutMe});
const Career = loadable(() => import(/* webpackPrefetch: true */ './Career'), {resolveComponent: (mod) => mod.Career});
const Education = loadable(() => import(/* webpackPrefetch: true */ './Education'), {resolveComponent: (mod) => mod.Education})
const Photos = loadable(() => import(/* webpackPrefetch: true */ './Photos'), {resolveComponent: (mod) => mod.Photos})
const Contact = loadable(() => import(/* webpackPrefetch: true */ './Contact'), {resolveComponent: (mod) => mod.Contact})

function App() {
  const [aboutMe, setAboutMe] = React.useState(false);
  const [career, setCareer] = React.useState(false);
  const [education, setEduction] = React.useState(false);
  const [camera, setCamera] = React.useState(false);
  const [contact, setContact] = React.useState(false);
  
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
  }
  useEffect(() => {
    Profile.preload();
    AboutMe.preload();
    Career.preload();
    Education.preload();
    Photos.preload();
    Contact.preload();
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="profile-border">
          <div className="profile">
            <Profile/>
          </div>
        </div>
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
      </header>
    </div>
  );
}

export default App;
