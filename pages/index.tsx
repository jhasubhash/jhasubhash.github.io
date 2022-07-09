import Head from "next/head";
import styles from "../styles/Home.module.css";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import { getShadowColor } from "../config/themeConfig";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import { sortByDate } from "../utils";

import Link from 'next/link';
import { useRouter } from 'next/router';
import ProjectItem from "../components/ProejctItem";

const CodeDiv = styled.code`
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1.1rem;
  background-color: ${({ theme }) => getShadowColor(theme, 0.75, theme.text)};
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

const TitleDiv = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const DescDiv = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.25rem;
`;

const ProjectDiv = styled.div`
display: flex;
flex-direction: column;
margin-top: 1rem;
margin-bottom: 1rem;
width:100%;
`;

const BlogDiv = styled.div`
display: flex;
flex-direction: column;
margin-top: 1rem;
margin-bottom: 1rem;
`;

const InfoDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;


const HeroDiv = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
justify-items: center;
padding: 5rem;
padding-bottom: 7rem;
gap:2rem;
@media (max-width: 900px) {
  grid-template-columns: repeat(1, 1fr);
  padding: 0rem;
  padding-bottom: 2rem;
}
`;

const ShareDiv = styled.div`
padding-top:2rem;
  display: flex;
  gap: 2rem;
`;

const MoreBtn = styled.a`
  font-size: 0.7rem;
  width: fit-content;
  margin-left: auto;
  border-radius: 10%;
`;

const PostsDiv = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
margin-top: 1rem;
margin-bottom: 1rem;
@media (max-width: 900px) {
  grid-template-columns: 1fr;
}
`;

const ProfilePic = styled.img`
clip-path: circle(100px at center);
`;

const ProjectItemDiv = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
margin-top: 1rem;
margin-bottom: 1rem;
@media (max-width: 900px) {
  grid-template-columns: repeat(2, 1fr);;
}
@media (max-width: 500px) {
  grid-template-columns: 1fr;
}
`;


export default function Home({ posts, projects }) {

  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Subhash Jha</title>
        <meta name="description" content="Subhash Jha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroDiv>
        <ProfilePic
          src={require("../images/profile.JPG")}
          alt="Subhash Jha"
          width={200}
          height={200}
        />
        <InfoDiv>
        <TitleDiv>I am Subhash Jha</TitleDiv>
        <DescDiv>
          Software Developer
          <br />
          <br />
          <CodeDiv>
            C++ | Javascript | ReactJS | NextJS | WebAssembly | Flutter
          </CodeDiv>
        </DescDiv>
        </InfoDiv>
        </HeroDiv>
        <ProjectDiv>
          <h3>
            Projects
          </h3>
          <ProjectItemDiv>
          {projects.filter(
                (post, index) => index < 6
              ).map((project, index) => (
          <ProjectItem project={project} key={index} preview={true} />
        ))}
        </ProjectItemDiv>
          <Link href='/projects'>
            <MoreBtn className="btn">➞</MoreBtn>
          </Link>
        </ProjectDiv>
        <BlogDiv>
          <h3>
            Posts
          </h3>
          <PostsDiv>
            {posts
              .filter(
                (post, index) => index < 3
              )
              .map((post, index) => (
                <Post post={post} key={index} preview={true}/>
              ))}
          </PostsDiv>
          <Link href='/blog'>
            <MoreBtn className="btn">➞</MoreBtn>
          </Link>
        </BlogDiv>
        <ShareDiv>
          <a href="mailto:subhashjha.mail@gmail.com">
            <MdEmail size={22} />
          </a>
          <a href="https://linkedin.com/in/scjha" target="__blank">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/jhasubhash" target="__blank">
            <SiGithub size={20} />
          </a>
          <a href="https://twitter.com/subhashjha333" target="__blank">
            <FaTwitter size={20} />
          </a>
        </ShareDiv>
      </main>
    </div>
  );
}


export async function getStaticProps() {
  let files = fs.readdirSync(path.join("posts"));

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return { slug, frontMatter };
  });

  files = fs.readdirSync(path.join("projects"));
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
      posts: posts.sort(sortByDate),
      projects: projects.sort(sortByDate),
    },
  };
}
