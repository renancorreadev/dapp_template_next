import { ConnectWallet } from './ConnectWallet'
import styles from './styles.module.scss'
import Image from 'next/Image'
import logo from '../../assets/images/logo.png'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} className={styles.logo} alt="logo" width={80} height={80}/>
        <nav>
          <a className={styles.active}>Home</a>
          <a>Post</a>
        </nav>
        <ConnectWallet />
      </div>
    </header>
  )
}
