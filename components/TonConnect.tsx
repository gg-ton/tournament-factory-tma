'use client';
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";

export default function TonConnect() {
    const [tonConnectUI, setOptions] = useTonConnectUI();

    return (
        <TonConnectButton/>
    );
}