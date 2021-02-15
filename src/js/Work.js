
import '../css/Work.css';
import React, {useEffect} from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
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
    work: {
        zIndex: 2,
        position: 'absolute',
        backgroundColor: 'transparent',
        top: '0',
        marginTop: '20vh',
        left: 0,
        right: 0,
    },
    body: {
        backgroundColor: 'black',
        height: '80vh',
    },
    header: {
        backgroundColor: 'white',
        height: '20vh',
    },
    posts: {
        backgroundColor: 'white',
        opacity: '0.8',
    }
}));

  
export const Work = () => {
    const classes = useStyles();

    useEffect(() => {
    });
    
    return (
        <div className="Work">
            <Grid container className={classes.header}></Grid>
            <Grid container className={classes.body}></Grid>
            <div className={classes.overlay}>
            <div className={classes.work}>
            </div>
            </div>
        </div>
    )
}