import React from 'react'
import { Card, CardContent, makeStyles, Paper, Typography} from '@material-ui/core';
import tree from '../assets/images/treeIcon.png'
import Carousel from 'react-material-ui-carousel'
import work from "../assets/images/work.json";
import { useLottie } from "lottie-react";

const useStyles = makeStyles({
    content: {
        color:'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width:'100vw',
        overflow: 'scroll',
        alignItems: 'center',
        paddingTop: '1em',
        '@media (min-width: 800px)': {
            marginTop: '3em',
        },
    },
    card: {
        '@media (min-width: 800px)': {
            maxWidth: '650px',
            marginTop: '1em'
        },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: `rgb(56,56,56)`,
        alignItems: 'center',
        paddingRight: '1em',
        paddingLeft: '1em',
        '@media (max-width: 800px)': {
          margin: 'auto',
          width: '80%',
          marginTop: '1em'
        },
    },
    cardContent: {
        width: '100%',
        textAlign:'left',
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
    },
    pic: {
        height: '300px',
        width: '100%'
    },

    codeAnim : {
        marginTop: '2em',
        maxWidth: '800px',
        maxHeight: '800px',
    },
});

interface Props {
    
}


const isDesktop = () => {
    return window.innerWidth > 800;
}

const GetCodeAnim = () => {
    const options = {
        animationData: work,
        loop: false,
        autoplay: true,
      };
    const { View } = useLottie(options);
    return View;
}

export const ProjectsPage = (props: Props) => {

    const classes = useStyles();
    return (
        <Paper className={classes.content} square>
            <Typography variant="h6">Projects</Typography>
            <hr style={{margin:0, opacity:0.6, width:'80%'}}></hr>

            <Carousel autoPlay={false}  navButtonsAlwaysInvisible={true}>
            <Card className={classes.card}>
                <img src={tree} style={{width:'100px', height: '100px', paddingRight:'5px'}} alt={"project"}/>
                <CardContent className={classes.cardContent}>
                <Typography variant="body1">Family Tree</Typography>
                <Typography variant="body2">Create and share your own family tree as well as that of well known personalities.</Typography>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <Typography variant="body2"><a className={classes.gplay} href={"https://play.google.com/store/apps/details?id=in.pseudocoder.tree.twa"} target='_blank' rel="noreferrer" >Play Store</a></Typography>
                <Typography variant="body2"><a href={"https://tree.pseudocoder.in"} target='_blank'  rel="noreferrer" className={classes.cardLink} >Try It</a></Typography>
                </div>
                </CardContent>
            </Card>
            </Carousel>
            <div className={classes.codeAnim}>
            <GetCodeAnim/>
            </div>
        </Paper>
    )
}
