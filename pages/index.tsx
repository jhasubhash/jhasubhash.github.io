import Head from 'next/head'
import { EmailIcon, LinkedinIcon } from 'react-share'
import styles from '../styles/Home.module.css'
import { SiGithub } from 'react-icons/si';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Subhash Jha</title>
        <meta name="description" content="Subhash Jha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          I am Subhash Jha
        </h1>

        <p className={styles.description}>
          Software Developer<br/><br/>
          <code className={styles.code}>C++ | Javascript | ReactJS | NextJS | WebAssembly | Flutter</code>
        </p>
        <div className='shareDiv'>
          <a href='mailto:subhashjha.mail@gmail.com'><MdEmail size={22}/></a>
          <a href='https://linkedin.com/in/scjha' target='__blank'><FaLinkedin size={20} /></a>
          <a href='https://github.com/jhasubhash' target='__blank'><SiGithub size={20}/></a>
          <a href='https://twitter.com/subhashjha333' target='__blank'><FaTwitter size={20}/></a>
        </div>
        <div className={styles.grid}>
        <a href="/blog" className={styles.card}>
            <h2 style={{fontFamily:'cursive'}}>Blog</h2>
            <p>Interested in reading random stuff? Here are my thoughts and opinions on just about everything.</p>
          </a>
          <a href="/projects" className={styles.card}>
            <h2 style={{fontFamily:'monospace'}}>Projects</h2>
            <p>What are my hobbies? Let us have a look at few of my pet projects. <br/>Apps | code | UI Design  </p>
          </a>
        </div>
        <div className={styles.gridPhoto}>
        <a href="/gallery" className={styles.card}>
          <h3>Gallery &rarr;</h3>
          <div className={styles.gridPic}>
           <div className={styles.mainPic}>
          <img src={require("../public/images/others/a.jpg")} alt="pic"/>
          </div>
           <div className={styles.mainPic}>
          <img src={require("../public/images/others/b.jpg")} alt="pic"/>
          </div>
           <div className={styles.mainPic}>
          <img src={require("../public/images/others/c.jpg")} alt="pic"/>
          </div>
           <div className={styles.mainPic}>
          <img src={require("../public/images/others/d.jpg")} alt="pic"/>
          </div>
          </div>
        </a>
        </div>
      </main>
    </div>
  )
}
  