
import '../css/About.css';
import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { faTwitter, faMedium, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    },
    overlay: {
        zIndex: 1,
        position: 'absolute',
        backdropFilter: 'blur(20px)',
        top: '0',
        bottom: '50vh',
        left: 0,
        right: 0,
    },
    about: {
        zIndex: 2,
        position: 'absolute',
        backgroundColor: 'transparent',
        top: '0',
        marginTop: '30vh',
        left: 0,
        right: 0,
        textAlign: 'center',
    },
    links : {
        zIndex: 2,
        padding: '3vh',
    },
    body: {
        backgroundColor: 'black',
        height: '80vh',
    },
    header: {
        backgroundColor: 'white',
        height: '20vh',
    },
    iconStyle: {
        padding: '1vh',

    },
}));

  
export const About = () => {
    const classes = useStyles();
    return (
        <div className="About">
            <Grid container className={classes.header}></Grid>
            <Grid container className={classes.body}></Grid>
            <div className={classes.overlay}>
            <div className={classes.about}>
                    <Typography gutterBottom>
                        <b>I am Subhash Jha </b><br/>
                        Currently working as Computer Scientist @ Adobe <br/>
                        I like creating stuff, which explains my interest in almost all the creative skills.<br/>
                        In my free time, you would find me surfing through internet looking for new ideas.<br/>
                        Painting is one of my several hobby. Along with drawing, I love writing stuff as well.<br/>
                    </Typography>
                <div className={classes.links}>
                <a href="https://www.linkedin.com/in/scjha/" target="_blank" style={{color:'#FFFFFF'}}>
                    <FontAwesomeIcon className={classes.iconStyle} size='lg' icon={faLinkedin} />
                </a>
                <a href="https://twitter.com/subhashjha333" target="_blank" style={{color:'#FFFFFF'}}>
                <FontAwesomeIcon className={classes.iconStyle} size='lg' icon={faTwitter} />
                </a>
                <a href="mailto:subhashjha.mail@gmail.com" target="_blank" style={{color:'#FFFFFF'}}>
                <FontAwesomeIcon className={classes.iconStyle} size='lg' icon={faEnvelope} />
                </a>
                <a href="https://jhasubhash.medium.com/" target="_blank" style={{color:'#FFFFFF'}}>
                <FontAwesomeIcon className={classes.iconStyle}  size='lg' icon={faMedium} />
                </a>
                </div>
            </div>
            </div>
        </div>
    )
}