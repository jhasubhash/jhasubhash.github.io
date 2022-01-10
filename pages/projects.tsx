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

function Projects({ projects }) {
  const router = useRouter();
  return (<>
  <Head>
        <title>Projects</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Link href='/'>
        <div className="btn btn-back">Back</div>
    </Link>

    <p>What are my hobbies? Let us have a look at few of my pet projects. <br/>Apps | code | UI Design  </p>
    <div className="projectbox">
      {projects.map((project, index)=>(
        <ProjectItem project={project} key={index}/>
    ))}
    </div>
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
