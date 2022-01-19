import { useEagerConnect } from '../../../hooks/useEgerConnect'
import { useWalletModal } from '../../../hooks/useWalletModal'
import { useWalletProvider } from '../../../hooks/useWalletProvider'
import { useState } from 'react'
import { SiQuantconnect } from 'react-icons/si'
import styles from './styles.module.scss'

export function ConnectWallet() {
  const [eagerConnect] = useState(false)
  useEagerConnect(eagerConnect)
  const { setOpen, deactivate } = useWalletModal()
  const { connected } = useWalletProvider()

  return (
    <button
      className={styles.signInButton}
      onClick={() => (connected ? deactivate() : setOpen(true))}
    >
      <SiQuantconnect />
      {connected ? 'Disconnect' : 'Connect'}
    </button>
  )
}
