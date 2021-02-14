
import '../css/Footer.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      position: 'absolute',
      bottom: '5vh',
      left: 0,
      right: 0,
      textAlign: 'center',
    },
  }));


export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button>Home</Button>
            <Button>Work</Button>
            <Button>Life</Button>
            <Button>Blog</Button>
            <Button>About</Button>
        </div>
    )
}