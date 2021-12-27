import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          Subhash Jha
        </h1>

        <p className={styles.description}>
          Software Developer<br/><br/>
          <code className={styles.code}>C++ | Javascript | ReactJS | NextJS | WebAssembly | Flutter</code>
        </p>

        <div className={styles.grid}>

        <a href="/blog" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Interested in reading random stuff? Here are my thoughts and opinions on just about everything.</p>
          </a>

          <a href="/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>What are my hobbies. Let us have a look at few of my pet projects. Apps | code | UI Design  </p>
          </a>

        </div>
      </main>
    </div>
  )
}
  