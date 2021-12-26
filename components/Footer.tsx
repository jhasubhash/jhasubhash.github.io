
import styles from '../styles/Home.module.css'

function Footer() {
    return <footer className={styles.footer}>
    <a
      href="/"
    >
      <span className={styles.logo}>
        <img src={require("../images/coder.jpg")} alt="Subhash Jha" width={40} height={40} />
      </span>
      {' '}subhashjha.in
    </a>
  </footer>;
}

export default Footer;