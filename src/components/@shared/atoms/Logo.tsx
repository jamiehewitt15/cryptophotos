import React, { ReactElement } from 'react'
import LogoAssetFull from '@oceanprotocol/art/logo/logo.svg'
import LogoAsset from '@images/logo.svg'
import styles from './Logo.module.css'

export default function Logo({
  noWordmark
}: {
  noWordmark?: boolean
}): ReactElement {
  return noWordmark ? (
    <LogoAsset className={styles.logo} />
  ) : (
    <LogoAssetFull className={styles.logo} />
  )
}
