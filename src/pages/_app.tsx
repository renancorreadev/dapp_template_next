import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { WalletProvider } from '../providers'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  )
}

export default MyApp
