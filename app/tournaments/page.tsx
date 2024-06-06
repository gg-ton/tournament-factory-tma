'use client';
import styles from "../page.module.css";
import {WalletAddress} from "@/components/WalletAddress";

export default function TournamentsList() {
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <WalletAddress/>
            </div>
        </main>
    );
}
