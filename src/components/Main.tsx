import { createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React from 'react'
import code from "../assets/images/code.json";
import { useLottie } from "lottie-react";

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
    }
  }),
);

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
                <Typography variant='h6'>Hello World !!! </Typography>
                <br/>
                <Typography variant='h5'>I am Subhash Jha</Typography>
                <Typography variant='body2'>Software Developer</Typography>
                <Typography variant='caption'>C++ | Javascript | ReactJs</Typography>
            </div>
            <div className={classes.codeAnim}>
            <GetCodeAnim/>
            </div>
        </Paper>
    )
}
