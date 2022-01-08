import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {sortByDate} from "../utils";
import Link from "next/link";
import Pagination from 'next-pagination'
import 'next-pagination/dist/index.css'
import { useRouter } from 'next/router'
import Head from "next/head";
import ProjectItem from "../components/ProejctItem";

let page = 1;
let size = 9;
function Projects({ projects }) {
  const router = useRouter();
  page = router.query.page ? Number(router.query.page) : page;
  size = router.query.size ? Number(router.query.size) : size;
  return (<>
  <Head>
        <title>Projects</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Link href='/'>
        <div className="btn btn-back">Back</div>
    </Link>
    <div className="posts">
      {projects.filter((project, index) => (
          index >= (page-1)*size && index < (page)*size
      )).map((project, index)=>(
        <ProjectItem project={project} key={index}/>
    ))}
    </div>
    <Pagination total={projects.length} sizes={[9,18,27,36]}/>
    <br/>
    <Link href='/'>
        <div className="btn btn-back">Back</div>
    </Link>
    </>
  );
}

export default Projects;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("projects"));

  const projects = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", fileName),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return { slug, frontMatter };
  });
  return {
    props: {
        projects: projects.sort(sortByDate),
    },
  };
}
