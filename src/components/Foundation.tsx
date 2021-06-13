import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { BlogPostsPage } from "./BlogPostsPage";
import {Nav} from './Nav';
import { Main } from './Main';
import {ProjectsPage} from './ProjectsPage';
import {Gallery} from './Gallery';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //flexGrow: 1,
      width: '100vw',
      height: '100vh'
    },
    paper: {
      //padding: theme.spacing(2),
      textAlign: 'center',
    },
    wrapper:{
      overflow: 'hidden',
      height: '100vh'
    },
    '@keyframes slide' : {
      from : {
        transform: 'translate3d(0, 0, 0)',
      },
      to : {
        transform: 'translate3d(-1804px, 0, 0)',
      }
    },
    /*slidingBackground:{
      background: `url(${bg}) repeat-x`,
      height: `100vh`,
      width: `3608px`,
      animation: `$slide 20s linear infinite`,
    },*/
  }),
);

export const Foundation = (props: Props) => {
    const [view, setView] = useState(0);
    const classes = useStyles();

    return (
        <Paper className={classes.wrapper} square>
          <Nav setView={setView}/>
          {view === 0 && <Main/>}
          {view === 1 && <ProjectsPage/>}
          {view === 2 && <Gallery/>}
          {view === 3 && <BlogPostsPage/>}
        </Paper>
    )
}
