import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import {sortByDate} from "../utils";
import Link from "next/Link";

function Blog({ posts }) {
  return (<>
  
  <Link href='/'>
        <div className="btn btn-back">Back</div>
    </Link>
    <div className="posts">
      {posts.map((post, index) => (
        <Post post={post} id={index}/>
      ))}
    </div>
    <Link href='/'>
        <div className="btn btn-back">Back</div>
    </Link>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return { slug, frontMatter };
  });
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
