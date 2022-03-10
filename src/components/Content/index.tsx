import { useWalletProvider } from '../../hooks/useWalletProvider'
import styles from './styles.module.scss'
import banner from '../../assets/images/fundo1.png'
import Image from 'next/Image'

const ContentConnected = () => {
  return (
    <section className={styles.section_box}>
      <h1>Connected!</h1>
      <h4>Welcome to Omnes Blockchain technology.</h4>
      <div className={styles.boxContent}>
        <div className={styles.boxCard}>
          <p>
            A safe project composting and development company for different
            sectors of project intervention and implementation of security
            solutions in different industry sectors.
          </p>
        </div>

        <div className={styles.boxCard}>
          <p>
            A safe project composting and development company for different
            sectors of project intervention and implementation of security
            solutions in different industry sectors.
          </p>
        </div>

        <Image
          className={styles.banner}
          src={banner}
          width={450}
          height={400}
          alt="image"
        />
      </div>
    </section>
  )
}

const ContentNotConnected = () => {
  return (
    <section className={styles.sectionNotconnected}>
      <h1>Connect to Wallet</h1>
    </section>
  )
}

export function Content() {
  const { connected } = useWalletProvider()

  return (
    <main>{connected ? <ContentConnected /> : <ContentNotConnected />}</main>
  )
}
