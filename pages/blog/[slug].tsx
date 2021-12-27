import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/Link'


export default function PostPage({frontMatter : {title, date, cover_image}, slug, content}) {
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
    return {
        props : {
            frontMatter,
            slug,
            content
        }
    }
}