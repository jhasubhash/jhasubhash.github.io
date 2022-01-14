import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import Link from "next/link";
import Pagination from "next-pagination";
import "next-pagination/dist/index.css";
import { useRouter } from "next/router";
import Head from "next/head";
import ProjectItem from "../components/ProejctItem";

function Projects({ projects }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        <span style={{ color: "grey", fontSize: "0.8rem" }}>
          <i>What are my hobbies?</i> Let us have a look at few of my pet
          projects.
        </span>
        <br />
        Apps | Code | UI Design{" "}
      </p>
      <div className="projectbox">
        {projects.map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
      </div>
      <br />
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
