import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Nav} from './Nav';
import loadable from '@loadable/component'
import { Main } from './Main';

const ProjectsPage = loadable(() => import(/* webpackPrefetch: true */ './ProjectsPage'), {resolveComponent: (mod: { ProjectsPage: any; }) => mod.ProjectsPage})
const Gallery = loadable(() => import(/* webpackPrefetch: true */ './Gallery'), {resolveComponent: (mod: { Gallery: any; }) => mod.Gallery})
const BlogPostsPage = loadable(() => import(/* webpackPrefetch: true */ './BlogPostsPage'), {resolveComponent: (mod: { BlogPostsPage: any; }) => mod.BlogPostsPage})

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

    useEffect(() => {
      ProjectsPage.preload();
      Gallery.preload();
      BlogPostsPage.preload();
    }, [])

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
