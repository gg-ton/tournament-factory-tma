'use client';

import { TonConnectButton } from '@tonconnect/ui-react';
import styles from './TonConnectWrapper.module.css';

export default function TonConnectWrapper() {
  return (
    <div className={styles.topRightCorner}>
      <TonConnectButton />
    </div>
  );
}
