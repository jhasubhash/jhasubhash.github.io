import { createStyles, makeStyles, Paper, StepContent, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import testContent from '../assets/posts/test.md';

interface Props {
  summarize: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      fontSize: '14px'
    },
  }),
);

export const Post = (props: Props) => {
    const classes = useStyles();
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(testContent).then(res => res.text()).then(text => setContent(text));
    }, [])

    return (
        <Paper className={classes.paper}><ReactMarkdown children={props.summarize?content.substr(0,200)+"...": content}/></Paper>
    )
}
