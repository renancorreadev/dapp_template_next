import { ConnectWallet } from './ConnectWallet'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img className={styles.logo} src="/images/logo.svg" alt="logo" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Post</a>
        </nav>

        <ConnectWallet />
      </div>
    </header>
  )
}
