import React from 'react'
import { makeStyles, Paper} from '@material-ui/core';
import tree from '../assets/images/tree.png'

const useStyles = makeStyles({
    content: {
        color:'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap:'2vh',
        height: '100vh',
        width:'100vw',
        overflow: 'scroll',
        alignItems: 'center',
    },
    card: {
        '@media (min-width: 800px)': {
            maxWidth: '650px',
        },
        boxShadow:`0 5px 5px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23)`,
        display: 'flex',
        backgroundColor: `rgb(56,56,56)`,
        marginTop: '4em',
        '@media (max-width: 800px)': {
          margin: '0.5em',
        },
    },
    cardContent: {
        width: '100%',
        textAlign:'left', 
        padding:'5px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    },
    cardLink:{
        textDecoration: 'none',
        color:'skyblue',
        marginTop: 'auto',
        cursor: 'pointer',
        alignSelf: 'flex-end',
        paddingRight: '5px'
    },
    gplay: {
        textDecoration:'none', 
        display:'flex', 
        alignItems:'center', 
        cursor: 'pointer',
        opacity:0.7, 
        fontSize:'0.8em',
        color:'skyblue',
    }
});

interface Props {
    
}

export const ProjectsPage = (props: Props) => {

    const classes = useStyles();
    return (
        <Paper className={classes.content} square>
            <div className={classes.card}>
                <img src={tree} style={{width:'100px', height: '100px', paddingRight:'5px'}} alt={"project"}/>
                <div className={classes.cardContent}>
                <span><b>Family Tree</b></span>
                <span style={{opacity:0.7}}>Create and share your own family tree as well as that of well known personalities.</span>
                <a className={classes.gplay} href={"https://play.google.com/store/apps/details?id=in.pseudocoder.tree.twa"} target='_blank' rel="noreferrer" >Play Store</a>
                <a href={"https://tree.pseudocoder.in"} target='_blank'  rel="noreferrer" className={classes.cardLink} >Try It</a>
                </div>
            </div>
        </Paper>
    )
}
