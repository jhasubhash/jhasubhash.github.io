import '../css/App.css';
import '../css/Contact.css';
import '../third-party/TagCanvas';
import React from 'react';
import fbLogo from '../assets/fb.png';
import twitterLogo from '../assets/twitter.png';
import githubLogo from '../assets/ghub.png';
import lnkdinLogo from '../assets/lnkdin.png';
import mailLogo from '../assets/mail.png';
import rssLogo from '../assets/rss.png';
import instaLogo from '../assets/insta.png';

export const Contact = () => {
    React.useEffect(() => {
        try {
            //window.TagCanvas.textFont="FontAwesome";
            window.TagCanvas.outlineRadius="20";
            window.TagCanvas.outlineThickness="2"
            window.TagCanvas.Start('myCanvas');
        } catch(e) {
        // something went wrong, hide the canvas container
        document.getElementById('tagCloud').style.display = 'none';
        }
    });

    return (
        <div id="tagCloud">
            <canvas width="300" height="160" id="myCanvas">
            <p>Canvas not supported !!!</p>
            <ul>
                <li><a href="https://www.facebook.com/subhash.jha.333" target="_blank" rel="noreferrer" ><img src={fbLogo} width="40px" height="40px" alt="Facebook"/></a></li>
                <li><a href="https://twitter.com/subhashjha333" target="_blank" rel="noreferrer"><img src={twitterLogo} width="30px" height="30px" alt="Twitter"/></a></li>
                <li><a href="https://www.linkedin.com/in/scjha/" target="_blank" rel="noreferrer"><img src={lnkdinLogo} width="30px" height="30px" alt="LinkedIn"/></a></li>
                <li><a href="https://www.instagram.com/pseudo_coder/" target="_blank" rel="noreferrer"><img src={instaLogo} width="30px" height="30px" alt="Instagram"/></a></li>
                <li><a href="https://jhasubhash.medium.com/" target="_blank" rel="noreferrer"><img src={rssLogo} width="30px" height="30px" alt="Blog"/></a></li>
                <li><a href="https://github.com/jhasubhash" target="_blank" rel="noreferrer"><img src={githubLogo} width="30px" height="30px" alt="Github"/></a></li>
                <li><a href="mailto:subhashjha.mail@gmail.com" target="_blank" rel="noreferrer"><img src={mailLogo} width="30px" height="30px" alt="Email"/></a></li>
            </ul>
            </canvas>
        </div>
    );
}