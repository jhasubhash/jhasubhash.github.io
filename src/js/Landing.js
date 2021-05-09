
import '../css/Landing.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import profilePic from '../assets/profile.jpg';
import {Footer} from "./Footer.js";
import { isMobile, BrowserView, MobileOnlyView, TabletView } from "react-device-detect";


const textAlign = isMobile ? 'center' : 'left';

const useStyles = makeStyles((theme) => ({
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
}));

  
export const Landing = () => {
    const classes = useStyles();
    return (
        <div className="Landing">
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
                    <React.Fragment>
                    <Typography variant="h2" component="h2" gutterBottom>
                    I am Subhash Jha
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Software Developer | Blogger | Artist | Ocassional Photographer
                    </Typography>
                    </React.Fragment>
                </Grid>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}