
import '../css/About.css';
import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
    body: {
        backgroundColor: 'black',
        height: '80vh',
    },
    header: {
        backgroundColor: 'white',
        height: '20vh',
    }
}));

  
export const About = () => {
    const classes = useStyles();
    return (
        <div className="About">
            <Grid container className={classes.header}></Grid>
            <Grid container className={classes.body}></Grid>
            <div className={classes.overlay}>
            <div className={classes.about}>
                    <Typography variant="h5" gutterBottom>
                        <b>I am Subhash Jha </b><br/>
                        I am working as Computer Scientist @ Adobe Systems. <br/>
                        I like creating stuff, which explains my interest in almost all the creative skills.<br/>
                        In my free time, you would find me surfing through internet looking for new ideas.<br/>
                        Painting is one of my several hobby. Along with drawing, I love writing stuff as well.<br/>
                    </Typography>
            </div>
            </div>
        </div>
    )
}