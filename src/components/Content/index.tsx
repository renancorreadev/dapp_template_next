import { useWalletProvider } from '../../hooks/useWalletProvider'

const ContentConnected = () => {
  return <h1>Connected!</h1>
}

const ContentNotConnected = () => {
  return <h1>Not Connected!</h1>
}

export function Content() {
  const { connected } = useWalletProvider()

  return (
    <main>{connected ? <ContentConnected /> : <ContentNotConnected />}</main>
  )
}
