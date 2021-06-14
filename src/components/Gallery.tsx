import { createStyles, makeStyles, Paper, Theme } from '@material-ui/core';
import React from 'react'
import Iframe from 'react-iframe'

interface Props {
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      wrapper: {
        width: '100vw',
        height: '100vh'
      },
      gallery: {
        width: '100vw',
        height: '100vh',
        borderStyle: 'none',
      },
  }),
);

export const Gallery = (props: Props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.wrapper} square>
            <Iframe url="https://subhashjha.in/gallery"
            width="100%"
            height="100%"
            id="myId"
            className={classes.gallery}
            position="relative"/>
        </Paper>
    )
}
