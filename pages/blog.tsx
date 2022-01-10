import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import {sortByDate} from "../utils";
import Link from "next/link";
import Pagination from 'next-pagination'
import 'next-pagination/dist/index.css'
import { useRouter } from 'next/router'
import Head from "next/head";

let page = 1;
let size = 9;
function Blog({ posts }) {
  const router = useRouter();
  page = router.query.page ? Number(router.query.page) : page;
  size = router.query.size ? Number(router.query.size) : size;
  return (<>
  <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Link href='/'>
        <div className="btn btn-back">Back</div>
    </Link>
    <div className="posts">
      {posts.filter((post, index) => (
          index >= (page-1)*size && index < (page)*size
      )).map((post, index)=>(
        <Post post={post} key={index}/>
    ))}
    </div>
    <Pagination total={posts.length} sizes={[9,18,27,36]} />
    <br/>
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
