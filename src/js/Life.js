
import '../css/Life.css';
import React, {useEffect} from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { faStar, faSun} from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faSchool, faGlassCheers, faGraduationCap, faCar, faBaby} from "@fortawesome/free-solid-svg-icons";
//import { faStar} from "@fortawesome/free-brands-svg-icons";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from '@material-ui/core/Avatar';

import headerPic from '../assets/life_banner.jpg';
import intelPic from '../assets/intel.jpg';
import adobePic from '../assets/adobe.jpg';
import carPic from '../assets/car.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    overlay: {
        zIndex: 1,
        position: 'absolute',
        top: '0',
        bottom: '5vh',
        left: 0,
        right: 0,
    },
    life: {
        zIndex: 2,
        position: 'absolute',
        overflowY: 'scroll',
        overflowX: 'hidden',
        backgroundColor: 'transparent',
        top: '0',
        bottom: '0',
        marginTop: '20vh',
        left: 0,
        right: 0,
    },
    body: {
        backgroundColor: 'black',
        height: '80vh',
    },
    header: {
        backgroundImage: `url(${headerPic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
        backgroundColor: 'black',
        height: '20vh',
    },
    posts: {
        backgroundColor: 'white',
        opacity: '0.8',
    },
    snap: {
        width: '250px',
        height: '250px',
    },
    avatar : {
        maxWidth:'100%',
        maxHidth:'100%',
    },
    avatarList : {
        height: '150px',
        width: '200px',
        display: 'flex',
    }
}));

  
export const Life = () => {
    const classes = useStyles();

    useEffect(() => {
    });
    
    return (
        <div className="Life">
            <Grid container className={classes.header}></Grid>
            <Grid container className={classes.body}></Grid>
            <div className={classes.overlay}>
            <div className={classes.life}>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="20th Feb 2021"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.3)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.3)' }}
                iconStyle={{ background: 'grey', color: '#fff' }}
                icon={<FontAwesomeIcon className={classes.iconStyle} size='lg' icon={faCar} />}
            >
                <h4 className="vertical-timeline-element-subtitle">Bought First Car</h4>
                <p>
                    <img alt="Adobe" src={carPic} className={classes.avatar} />
                    Finally after a lot of delay due to the covid situation, we bought our first car in Feb, 2021.
                    Though we started our search from the Kia Sonet segment, hyundai creata caught my attention. And once you 
                    fall for somthing it's hard to look away from it. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="8th Dec 2019"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.3)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.3)' }}
                iconStyle={{ background: 'grey', color: '#fff' }}
                icon={<FontAwesomeIcon className={classes.iconStyle} size='lg' icon={faGlassCheers} />}
            >
                <h4 className="vertical-timeline-element-subtitle">The Marriage</h4>
                <p>
                    Coming Soon ...
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2016 - Present"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.3)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.3)' }}
                iconStyle={{ background: 'grey', color: '#fff' }}
                icon={<FontAwesomeIcon className={classes.iconStyle} size='lg' icon={faBriefcase} />}
            >
                <h4 className="vertical-timeline-element-subtitle">Working @ Adobe</h4>
                <p>
                    <img alt="Adobe" src={adobePic} className={classes.avatar} />
                     Coming to Adobe, the first team I joined was Print team. I worked with different teams over the period 
                     of time. Adoeb Illustrator, Dreamweaver, Adobe XD, CCWeb are some of the products I contributed in. I also 
                     worked on an open source project caled Adobe Brackets. Currently I am in the Adobe Photoshop team.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2015 - 2016"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.3)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.3)' }}
                iconStyle={{ background: 'grey', color: '#fff' }}
                icon={<FontAwesomeIcon className={classes.iconStyle} size='lg' icon={faBriefcase} />}
            >
                <h4 className="vertical-timeline-element-subtitle">Working @ Intel</h4>
                <p>
                    <img alt="Intel" src={intelPic} className={classes.avatar} />
                    My first job was at Intel. I worked there for about a year as Firmware Engineer. I worked on 
                    4g modem firmware development. The work was mainly on embedded C++, and coming from a computer science 
                    background, I didn't find that very interesting. At that time I was more inclined towards working on desktop 
                    applications.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2013 - 2015"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.3)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.3)' }}
                iconStyle={{ background: 'grey', color: '#fff' }}
                icon={<FontAwesomeIcon className={classes.iconStyle} size='lg' icon={faGraduationCap} />}
            >
                <h4 className="vertical-timeline-element-subtitle">Indian Institute of Technology</h4>
                <p>
                    Coming Soon ...
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2009 - 2013"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.3)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.3)' }}
                iconStyle={{ background: 'grey', color: '#fff' }}
                icon={<FontAwesomeIcon className={classes.iconStyle} size='lg' icon={faGraduationCap} />}
            >
                <h4 className="vertical-timeline-element-subtitle">Heritage Institute of Technology</h4>
                <p>
                    Coming Soon ...
                </p>
            </VerticalTimelineElement> 
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2009"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.3)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.3)' }}
                iconStyle={{ background: 'grey', color: '#fff' }}
                icon={<FontAwesomeIcon className={classes.iconStyle} size='lg' icon={faStar} />}
            >
                <h4 className="vertical-timeline-element-subtitle">Life in Kota</h4>
                <p>
                    Was enrolled in the best coaching institute in India at that point of time which was <b>Bansal Classes</b> . 
                    Next two years in Bansal classes and then one more year in different smaller coaching institutes in Kota. This 
                    is how I spent my three years in Kota (at least on paper). I had secured 86% in class Xth, but failed to get even 60% 
                    in my class XIIth. So, the result summed up the story of what I did in Kota. Anaway, after failing to clear JEE/ AIEEE 
                    twice, I took admission in <b>Heritage Institute of Technology</b>, a private college in Kolkata, through WBJEE.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2000 - 2006"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.3)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.3)' }}
                iconStyle={{ background: 'grey', color: '#fff' }}
                icon={<FontAwesomeIcon className={classes.iconStyle} size='lg' icon={faSchool} />}
            >
                <h4 className="vertical-timeline-element-subtitle">Early Education</h4>
                <p>
                After moving to Darbhanga, my parents enrolled me in Rose Public School. 
                It was one of the most famous private school at that point of time. I guess it still is, 
                but with the explosion of new schools, it has lost its shine a bit now a days. I studied there 
                from third standard to fifth standard. After that I moved to D.A.V Public School for my later education.
                The school campus was next to my house. I did my matriculation from there. And then moved to Kota for my JEE preparation.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="5th Feb 1992"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.3)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.3)' }}
                iconStyle={{ background: 'grey', color: '#fff' }}
                icon={<FontAwesomeIcon className={classes.iconStyle} size='lg' icon={faBaby} />}
            >
                <h4 className="vertical-timeline-element-subtitle">Journey begins ...</h4>
                <p>
                I was born in a small town called Darbhanga in Bihar (India). I spent my early childhood in a small 
                village <b>Sankorthu</b> which is nearby a relatively better known place called Sarisab Pahi in Madhubani district of Bihar. 
                At age of around 10, my parents moved to Darbhanga town as the education infrastructure was very poor in my village.
                </p>
            </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
            </div>
        </div>
    )
}