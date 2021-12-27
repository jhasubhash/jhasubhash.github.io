import Link from "next/Link";

function Post({post, id}) {
    return <div className='card' key={id}>
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