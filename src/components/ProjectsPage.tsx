import React from 'react'
import { Card, CardContent, makeStyles, Paper, Typography} from '@material-ui/core';
import tree from '../assets/images/treeIcon.png'
import gita from '../assets/images/gita.png'
import { Carousel } from 'react-responsive-carousel';
import work from "../assets/images/work.json";
import { useLottie } from "lottie-react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            gap: '4vw'
        },
    },
    card: {
        '@media (min-width: 800px)': {
            //maxWidth: '650px',
            //height: '650px',
            marginTop: '1em'
        },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: `rgb(56,56,56)`,
        alignItems: 'center',
        paddingRight: '1em',
        paddingLeft: '1em',
        justifyContent: 'space-around',
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
        maxWidth: '600px',
        maxHeight: '600px',
        '@media (min-width: 800px)': {
            marginTop: 0,
        }
    },
    img : {
        width:'40%!important', 
        height: '40%!important', 
        paddingRight:'5px',
        '@media (max-width: 800px)': {
            width:'40%!important', 
            height: '40%!important', 
        }
    },
    carousel: {
        display:'flex',
        flexDirection:'column',
        width:'100vw',
        '& .carousel-slider':{
        },
        '& div':{
            '& .control-dots':{
                margin: 0
            },
            '& .control-arrow:hover':{
                background: 'none!important',
            },
        },
        '@media (min-width: 800px)': {
            width:  '600px!important', 
        }
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
            <div className={classes.codeAnim}>
            <GetCodeAnim/>
            </div>
            <Carousel showArrows={true} showThumbs={false} className={classes.carousel} autoPlay={false} interval={100000} dynamicHeight={false} showStatus={false}>
            <Card className={classes.card}>
                <img src={tree} className={classes.img} alt={"project"}/>
                <CardContent className={classes.cardContent}>
                <Typography variant="body1">Family Tree</Typography>
                <Typography variant="body2">Create and share your own family tree as well as that of well known personalities.</Typography>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <Typography variant="body2"><a className={classes.gplay} href={"https://play.google.com/store/apps/details?id=in.pseudocoder.tree.twa"} target='_blank' rel="noreferrer" >Play Store</a></Typography>
                <Typography variant="body2"><a href={"https://tree.pseudocoder.in"} target='_blank'  rel="noreferrer" className={classes.cardLink} >Try It</a></Typography>
                </div>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <img src={gita} className={classes.img} alt={"project"}/>
                <CardContent className={classes.cardContent}>
                <Typography variant="body1">Bhagavad Gita</Typography>
                <Typography variant="body2">An app to make Gita easily accessible and keep track of you reading with options like bookmarking and progress tracking.</Typography>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <Typography variant="body2"><a className={classes.gplay} href={"https://play.google.com/store/apps/details?id=in.pseudocoder.gita.twa"} target='_blank' rel="noreferrer" >Play Store</a></Typography>
                <Typography variant="body2"><a href={"https://gita.pseudocoder.in"} target='_blank'  rel="noreferrer" className={classes.cardLink} >Try It</a></Typography>
                </div>
                </CardContent>
            </Card>
            </Carousel>
        </Paper>
    )
}
