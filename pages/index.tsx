import Head from "next/head";
import { EmailIcon, LinkedinIcon } from "react-share";
import styles from "../styles/Home.module.css";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import { getShadowColor } from "../config/themeConfig";

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

const ShareDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Subhash Jha</title>
        <meta name="description" content="Subhash Jha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src={require("../images/profile.JPG")}
          alt="Subhash Jha"
          width={200}
          height={200}
          className="avatar"
        />
        <br />
        <TitleDiv>I am Subhash Jha</TitleDiv>
        <DescDiv>
          Software Developer
          <br />
          <br />
          <CodeDiv>
            C++ | Javascript | ReactJS | NextJS | WebAssembly | Flutter
          </CodeDiv>
        </DescDiv>
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
