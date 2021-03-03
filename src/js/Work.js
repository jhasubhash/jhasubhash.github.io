
import '../css/Work.css';
import React, {useEffect} from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import treePic from '../assets/tree.png';
import canvasPic from '../assets/canvas.png';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    overlay: {
        zIndex: 1,
        position: 'absolute',
        backdropFilter: 'blur(20px)',
        top: '0',
        bottom: '5vh',
        left: 0,
        right: 0,
    },
    work: {
        zIndex: 2,
        position: 'absolute',
        backgroundColor: 'transparent',
        top: '0',
        bottom:'7vh',
        marginTop: '20vh',
        left: 0,
        right: 0,
        overflowX: 'hidden',
        overflowY: 'scroll',
    },
    body: {
        backgroundColor: 'black',
        height: '75vh',
        overflowX: 'hidden',
        overflowY: 'scroll',
        padding: theme.spacing(1),
    },
    bodyBg: {
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
    },
    card: {
        maxWidth: 345,
        height: 'fit-content',
      },
    media: {
        height: 140,
    },
    cardContainer:{
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: 'center',
    },
}));

  
export const Work = () => {
    const classes = useStyles();

    useEffect(() => {
    });
    
    return (
        <div className="Work">
            <Grid container className={classes.bodyBg}>
                <Grid container className={classes.header}>
                <Grid item xs={12} sm={12} md={12}>
                    <div className="Header"></div>
                </Grid>
                </Grid>
                <Grid container className={classes.body}>
                    <Grid item xs={12} sm={6} md={3} className={classes.cardContainer}>
                    <Card className={classes.card}>
                        <CardActionArea target="_blank" href="https://subhashjha.in/tree">
                            <CardMedia
                            className={classes.media}
                            image={treePic}
                            title="Family Tree"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Family Tree
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                First project in ReactJS. Used different open source modules to implement this family tree like 
                                graph simulation. My plan is to make it generic so that anybody can use it to create their own 
                                family tree. Right now it just showcase my family tree. Feee free to check it out.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button  target="_blank" href="https://subhashjha.in/tree" size="small" color="secondary">
                            Checkout
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className={classes.cardContainer}>
                    <Card className={classes.card}>
                        <CardActionArea target="_blank" href="https://subhashjha.in/canvas">
                            <CardMedia
                            className={classes.media}
                            image={canvasPic}
                            title="Canvas"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Canvas
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A tiny sample project built using Canvaskit. Built it to understand how wasm is being 
                                loaded in the web page and also to learn a bit about canvaskit. It has a very limited 
                                functionalities currently. Hope to expand it in future.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button  target="_blank" href="https://subhashjha.in/canvas" size="small" color="secondary">
                            Checkout
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className={classes.cardContainer}>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className={classes.cardContainer}>
                    </Grid>
            </Grid>
            </Grid>
        </div>
    )
}