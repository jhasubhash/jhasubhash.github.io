import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RSSParser from 'rss-parser';
import TextTruncate from 'react-text-truncate';
import '../css/Blog.css';
import profilePic from '../assets/profile400.jpg';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';


let parser = new RSSParser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
let contents = [];


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: theme.spacing(1),
    },
    media: {
        height: 140,
    },
    cover: {
        width: 151,
    },
    content: {
        flex: '1 0 auto',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    grid: {
        overflow:'scroll',
        height: '98vh',
    '& > *': {
        margin: theme.spacing(1),
      },
    }
  }));

export const loadBlog = (cb) => {

    if(contents.length){
        return;
    }

    parser.parseURL(CORS_PROXY + 'https://medium.com/feed/@jhasubhash', function(err, feed) {
        if (err) throw err;
        feed.items.forEach(function(entry) {
            contents.push({link:entry.link, title:entry.title, snippet:entry["content:encodedSnippet"]});
        })
        cb(true);
    })
}

const generateLinks = (classes) => {
    return (
        <div>
            {contents.map(({link, title, snippet}) => (
                <Card className={classes.root} elevation={3}>
                    <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <TextTruncate
                                line={3}
                                element="span"
                                truncateText="…"
                                text={snippet}
                            />
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" href={link} onClick={() => {}}>
                        Read More
                    </Button>
                    </CardActions>
                    </div>
                </Card>
            ))}
        </div>
    )
}


export const Blog = () => {
    const classes = useStyles();
    const [contentLoaded, setContentLoaded] = React.useState(false);
    loadBlog(setContentLoaded);

    return (
        <div className={classes.grid}>
            { generateLinks(classes) }
        </div>
    )
}