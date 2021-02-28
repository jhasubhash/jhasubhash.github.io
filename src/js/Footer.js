
import '../css/Footer.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      position: 'absolute',
      bottom: '0vh',
      left: 0,
      right: 0,
      textAlign: 'center',
      zIndex: 3,
      backgroundColor: 'black',
    },
  }));


export const Footer = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button onClick={() => {props.loadPage(1)}} >Home</Button>
            <Button onClick={() => {props.loadPage(2)}} >Work</Button>
            <Button onClick={() => {props.loadPage(3)}} >Life</Button>
            <Button onClick={() => {props.loadPage(4)}} >Blog</Button>
            <Button onClick={() => {props.loadPage(5)}} >About</Button>
        </div>
    )
}