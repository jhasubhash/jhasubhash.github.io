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
        <img src={require("../images/profile.JPG")} alt="Subhash Jha" width={200} height={200} className='avatar'/>
        <br/>
        <h4 className={styles.title}>
          I am Subhash Jha
        </h4>

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
      </main>
    </div>
  )
}
  