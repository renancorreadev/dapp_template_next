import { useEffect } from 'react'
import wallets from '../../config/walletsConfig'
import useWallet from '../../hooks/useWallet'
import { useWalletModal } from '../../hooks/useWalletModal'
import { useConfig } from '../../contexts/configContext'
import { useWeb3React } from '@web3-react/core'
import style from './WalletModal.module.css'
import { Connectors } from '../../config/types'

export const WalletModal: React.FC = () => {
  const { config } = useConfig()
  const login = useWallet()
  const { setOpen } = useWalletModal()
  const { library } = useWeb3React()

  useEffect(() => {
    if (library) {
      setOpen(false)
    }
  }, [library, setOpen])

  return (
    <div
      className={style.root}
      style={{ backgroundColor: config?.theme?.backgroundColor }}
    >
      <p
        className={config.darkMode ? style.darkHeading : style.heading}
        style={{ color: config?.theme?.headingColor }}
      >
        Connect Wallet
      </p>
      <div className={style.divider} />
      <div className={config.grid ? style.grid : style.noGrid}>
        {wallets
          .filter((i) => config.bsc || i.connector !== Connectors.BSC)
          .map((item, index) => (
            <div key={index} style={{ marginBottom: 7 }}>
              <div
                className={`${
                  config.darkMode ? style.darkWalletBtn : style.walletBtn
                } ${config.grid && style.gridWalletBtn}`}
                onClick={() => login(item.connector)}
                style={{ backgroundColor: config.theme?.btnColor }}
              >
                <p
                  className={`${
                    config.darkMode ? style.darkTitle : style.title
                  } ${config.grid && style.gridText}`}
                  style={{ color: config.theme?.textColor }}
                >
                  {item.title}
                </p>
                <img alt="" src={item.image} />
              </div>
            </div>
          ))}
      </div>
      <p
        className={`${style.learnText}`}
        style={{ color: config.theme?.textColor }}
      >
        &nbsp;Learn how to connect
      </p>
    </div>
  )
}
