'use client';

import styles from "./page.module.css";
import {TonConnectButton, useIsConnectionRestored, useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Home() {
    const [tonConnectUI, setOptions] = useTonConnectUI();
    const isConnectionRestored = useIsConnectionRestored();
    const wallet = useTonWallet();
    const router = useRouter();

    // TODO: maybe we should implement a proper auth
    useEffect(() => {
        if (wallet !== null) {
            router.replace("/tournaments");
        }
    }, [router, wallet]);

    return (
      <main className={styles.main}>
          <div className={styles.center}>
              <h1>gg.ton</h1>
          </div>
          <div className={styles.center}>
              <TonConnectButton/>
          </div>
      </main>
    );
}
