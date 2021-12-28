import Link from "next/link";

function Post({post}) {
    return <div className='card'>
        <img src={post.frontMatter.cover_image} alt=" "/>
        <div className="post-date">Posted on {post.frontMatter.date}</div>
        <h3>{post.frontMatter.title}</h3>
        <p style={{color:'grey'}}>{post.frontMatter.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>
            <a className="btn">Read More</a>
        </Link>
        </div>
}

export default Post;