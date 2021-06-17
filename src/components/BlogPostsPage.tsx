import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Paper, Typography } from '@material-ui/core';

import blog from "../assets/images/blog.json";
import { useLottie } from "lottie-react";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    content: {
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap:'2vh',
        alignItems: 'center',
        overflow: 'scroll',
        height: '85vh',
        marginTop: '4em',
        '@media (max-width: 800px)': {
            margin: '0.5em',
        },
    },
    card: {
        display: 'flex',
        width: '100%',
        overflow: 'unset',
        '@media (min-width: 800px)': {
            maxWidth: '650px',
            minHeight: '100px',
        },
    },
    cardContent: {
        textAlign:'left', 
        padding:'5px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        width:'100%'
    },
    cardFooter:{
        marginTop: 'auto',
        paddingRight: '5px',
        display:'flex',
        justifyContent: 'space-between',
    },
    categoryPill:{
        fontSize: '0.7em',
        //borderRadius: '20%',
        backgroundColor: 'rgba(0,0,0,0.25)',
        paddingLeft: '0.5em',
        paddingRight: '0.5em',
    },
    cardLink:{
        color: theme.palette.primary.main,
        textDecoration: 'none'
    },
    pillCollection:{
        display:'flex',
        gap: '1em',
        '@media (max-width: 800px)': {
            display: 'none',
        },
    },
    loader : {
        border: '6px solid #f3f3f3', /* Light grey */
        borderTop: '6px solid #424242', /* Blue */
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: '$spin 2s linear infinite',
    },
    '@keyframes spin': {
    '0%' : { transform: 'rotate(0deg)' },
    '100%' : { transform: 'rotate(360deg)' }
    },
    codeAnim : {
        marginTop: '8em',
        maxWidth: '800px',
        maxHeight: '800px',
    },
}));

interface Props {
    
}

const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jhasubhash";

const ToText = (node: any)=>{
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.textContent;
    return node;
}

const isDesktop = () => {
    return window.innerWidth > 800;
}

const getCardElement = (props: any) => {
    const strLen = isDesktop() ? 150: 100;
    const classes = props.classes;
    return ( 
        <Card className={classes.card} key={props.key}>
            {isDesktop() && <CardMedia>
            <img src={props.thumbnail} style={{width:'100px', height: '100px', paddingRight:'5px'}} alt={"post cover"}/>
            </CardMedia>}
            <div className={classes.cardContent}>
            <Typography variant="body1">{props.title}</Typography>
            <Typography variant="body2">{props.description && <span style={{opacity:0.7}}>{`${ToText(props.description.substring(0, strLen))}...`}</span>}</Typography>
            <div className={classes.cardFooter}>
                <div className={classes.pillCollection}>
                    {props.categories.splice(0,2).map((category:string) => <div className={classes.categoryPill}>{category}</div>)}
                </div>
                {false && <div className={classes.cardLink} onClick={()=>props.onReadMore(props.key)}>Read More ...</div>}
                <Typography variant="caption"><a className={classes.cardLink} href={props.link} target={"_blank"} rel="noreferrer">Read More ...</a></Typography>
            </div>
            </div>
        </Card>
    )
}

const GetCodeAnim = () => {
    const options = {
        animationData: blog,
        loop: true,
        autoplay: true,
      };
    const { View } = useLottie(options);
    return View;
}

export const BlogPostsPage = (props: Props) => {
    const [avatar, setAvatar] = useState();
    const [profileLink, setProfileLink] = useState("");
    const [profileTitle, setProfileTitle] = useState("");
    const [posts, setPosts] = useState([]);
    const [postOpen, setPostOpen] = useState(false);
    const [ currentPostIndex, setCurrentPostIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        Axios.get(mediumURL).then((data) => {
            const avatar = data.data.feed.image;
            const profileLink = data.data.feed.link;
            const res = data.data.items;
            const posts = res.filter((item: { categories: string | any[]; }) => item.categories.length > 0);
            const title = data.data.feed.title;
            setIsLoading(false);
            setAvatar(avatar);
            setProfileLink(profileLink);
            setProfileTitle(title);
            setPosts(posts);
        })
    }, []);

    const onReadMore = (index: number) => {
        setCurrentPostIndex(index);
        setPostOpen(true);
    }

    const onPostClose = () => {
        setPostOpen(false);
    }

    const classes = useStyles();
    let postUI = [<div></div>];
    if(posts){
        postUI = posts.map((post : any, index) => {
            return getCardElement({
                title: post.title, 
                description: post.description, 
                date: post.pubDate, 
                key:index, 
                thumbnail:post.thumbnail, 
                categories: post.categories,
                link: post.link,
                classes:classes,
                onReadMore: onReadMore
            })
        });
    }

    return (
        <Paper className={classes.content} square elevation={0}>
            {isLoading && 
            <div className={classes.codeAnim}>
            <GetCodeAnim/>
            </div>}
            {postUI}
        </Paper>
    )
}
