import { createStyles, makeStyles, Tab, Tabs, Theme } from '@material-ui/core';
import React from 'react'

interface Props {
    setView: (view: number) => void,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav:{
      display: 'flex',
      color: 'white',
      width: '100vw',
      justifyContent: 'center',
      gap: '1em',
      position: 'absolute',
      zIndex: 1,
      '@media (max-width: 800px)': {
          bottom: '1em',
      },
      backgroundColor:'#424242'
    },
    link:{
        textDecoration: 'none',
        color: 'white',
        paddingLeft: '0.5em',
        paddingRight:'0.5em',
        marginTop: '0.5em',
    }
  }),
);

export const Nav = (props: Props) => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number)=>{
        setValue(newValue);
        props.setView(newValue);
    }

    return (
        <div className={classes.nav}>
            <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="nav"
            >
            <Tab label="Home" />
            <Tab label="Projects" />
            <Tab label="Gallery" />
            <Tab label="Blog" />
            </Tabs>
        </div>
    )
}
