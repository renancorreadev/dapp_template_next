import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Header } from '../components/Header'

import { Content } from '../components/Content'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blockchain Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <Header />

      <Content />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <h2>skyxcripto</h2>
          </span>
        </a>
      </footer>
    </div>
  )
}
