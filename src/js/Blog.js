
import '../css/Blog.css';
import React, {useEffect} from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import headerPic from '../assets/blog_header.jpg';

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
    blog: {
        zIndex: 2,
        position: 'absolute',
        backgroundColor: 'transparent',
        top: '0',
        bottom: '0',
        marginTop: '20vh',
        overflowX: 'hidden',
        overflowY: 'scroll',
        left: 0,
        right: 0,
    },
    body: {
        backgroundColor: 'white',
        height: '80vh',
    },
    header: {
        backgroundImage: `url(${headerPic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '20vh',
    },
    posts: {
        backgroundColor: 'white',
    }
}));

  
export const Blog = () => {
    const classes = useStyles();

    useEffect(() => {
       window.mediumWidget();
    });
    
    return (
        <div className="Blog">
            <Grid container className={classes.header}></Grid>
            <Grid container className={classes.body}></Grid>
            <div className={classes.overlay}>
            <div className={classes.blog}>
            <div className={classes.posts} id="medium-widget"></div>
            </div>
            </div>
        </div>
    )
}