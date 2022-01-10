import Link from "next/link";
import styled from "styled-components"


const PostImage = styled.img`
    width: 100%;
    border-radius: 10px;
`;

function Post({post}) {
    return <div className='card'>
        <PostImage src={post.frontMatter.cover_image} alt=" "/>
        <div className="post-date">Posted on {post.frontMatter.date}</div>
        <h3>{post.frontMatter.title}</h3>
        <p style={{color:'grey'}}>{post.frontMatter.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>
            <a className="btn">Read More</a>
        </Link>
        </div>
}

export default Post;