import { Connectors } from './types'

const wallets = [
  {
    title: 'MetaMask',
    image: '/images/icons/metamask.svg',
    connector: Connectors.INJECTED,
  },
  {
    title: 'Binance Chain Wallet',
    image: '/images/icons/binancewallet.svg',
    connector: Connectors.BSC,
  },
  {
    title: 'Trust Wallet',
    image: '/images/icons/trustwallet.svg',
    connector: Connectors.INJECTED,
  },
  {
    title: 'Wallet Connect',
    image: '/images/icons/walletconnect.svg',
    connector: Connectors.WALLET_CONNECT,
  },
]

export default wallets
