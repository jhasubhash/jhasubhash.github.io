import Link from "next/link";
import styled from "styled-components"
import {getShadowColor} from '../config/themeConfig'


const PostImage = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const PostDate = styled.div`
    margin-bottom: 20px;
    padding: 3px 10px;
    background-color: ${({ theme }) => getShadowColor(theme,0.70, theme.text)};
`;


function Post({post}) {
    return <div className='card'>
        <PostImage src={post.frontMatter.cover_image} alt=" "/>
        <PostDate>Posted on {post.frontMatter.date}</PostDate>
        <h3>{post.frontMatter.title}</h3>
        <p style={{color:'grey'}}>{post.frontMatter.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>
            <a className="btn">Read More</a>
        </Link>
        </div>
}

export default Post;