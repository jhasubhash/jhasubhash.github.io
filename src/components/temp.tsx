import { createStyles, makeStyles, Tab, Tabs, Theme, Typography } from '@material-ui/core';
import React from 'react'

interface Props {
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper : {
        width: '100vw',
        height: '100vh'
  ,      marginTop: '3em',
        '@media (max-width: 500px)': {
          margin: '0.5em',
        },
    }
  }),
);

export const Gallery = (props: Props) => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
        </div>
    )
}
