import { createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React from 'react'
import code from "../assets/images/code.json";
import { useLottie } from "lottie-react";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content:{
      width: '100vw',
      height: '100vh',
      top:0,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      '@media (max-width: 500px)': {
        alignItems: 'unset',
      },

    },
    codeAnim : {
        maxWidth: '800px',
        maxHeight: '800px',
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 500px)': {
            justifyContent: 'flex-end',
        },
    },
    social: {
        //marginTop: 'auto',
        display: 'flex',
        padding: '6vh',
        gap:'2vh'
    },
    iconLink: {
        width:'25px',
        height:'25px',
        cursor:'pointer',
        display:'block',
        textDecoration: 'none',
        color:'white'
    }
  }),
);

const isDesktop = () => {
    return window.innerWidth > 800;
}

const GetCodeAnim = () => {
    const options = {
        animationData: code,
        loop: false,
        autoplay: true,
      };
    const { View } = useLottie(options);
    return View;
}

export const Main = (props: Props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.content} square>
            <div className={classes.profile}>
                {!isDesktop() &&
                <React.Fragment>
                <Typography variant='h6'>Hello World !!! </Typography>
                <br/>
                <Typography variant='h4'>I am Subhash Jha</Typography>
                <Typography variant='body1'>Software Developer</Typography>
                <Typography variant='body2'>C++ | Javascript | ReactJs</Typography>
                </React.Fragment>}
                {isDesktop() &&
                <React.Fragment>
                <Typography variant='h5'>Hello World !!! </Typography>
                <br/>
                <Typography variant='h3'>I am Subhash Jha</Typography>
                <Typography variant='h6'>Software Developer</Typography>
                <Typography variant='body1'>C++ | Javascript | ReactJs</Typography>
                </React.Fragment>}
                <div className={classes.social}>
                    <a className={classes.iconLink} href="https://github.com/pseudocoder-in" target={"_blank"} rel="noreferrer"><GitHubIcon/></a>
                    <a className={classes.iconLink} href="https://twitter.com/subhashjha333" target={"_blank"} rel="noreferrer"><TwitterIcon/></a>
                    <a className={classes.iconLink} href="https://www.linkedin.com/in/scjha/" target={"_blank"} rel="noreferrer"><LinkedInIcon/></a>
                    <a className={classes.iconLink} href="mailto:subhashjha.mail@gmail.com"><EmailIcon/></a>
                </div>
            </div>
            <div className={classes.codeAnim}>
            <GetCodeAnim/>
            </div>
        </Paper>
    )
}
