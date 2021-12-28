import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'
import hljs from "highlight.js";

import 'highlight.js/styles/default.css';

import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon
  } from "react-share";

marked.setOptions({
    langPrefix: "hljs language-",
    highlight: function(code) {
      return hljs.highlightAuto(code, ["cpp", "javascript"]).value;
    }
});

export default function PostPage({frontMatter : {title, date, cover_image}, slug, content, url}) {
    return <>
    <Link href='/blog'>
        <div className="btn btn-back">Back</div>
    </Link>
    <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        <img src={cover_image} alt=''/>
        <div className="post-body">
            <div dangerouslySetInnerHTML={{__html: marked.parse(content)}}></div>
        </div>
        <div className='shareDiv'>
            <EmailShareButton children={<EmailIcon size={32} round={true}/>} url={url}/>
            <FacebookShareButton children={<FacebookIcon size={32} round={true}/>} url={url}/>
            <LinkedinShareButton children={<LinkedinIcon size={32} round={true}/>} url={url}/>
            <TwitterShareButton children={<TwitterIcon size={32} round={true}/>} url={url}/>
            <WhatsappShareButton children={<WhatsappIcon size={32} round={true}/>} url={url}/>
        </div>
    </div>
    <Link href='/blog'>
        <div className="btn btn-back">Back</div>
    </Link>
    </>
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map((fileName)=>({
        params : {
            slug : fileName.replace('.md','')
        }
    }))
    return {
        paths,
        fallback : false
    }
}

export async function getStaticProps({params : {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join('posts',slug+'.md'), 'utf-8');
    const {data:frontMatter, content} = matter(markdownWithMeta)
    const url = 'https://subhashjha.in/blog/'+slug;
    return {
        props : {
            frontMatter,
            slug,
            content,
            url
        }
    }
}