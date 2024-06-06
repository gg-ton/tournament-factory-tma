'use client';
import { useTonAddress } from '@tonconnect/ui-react';

export const WalletAddress = () => {
    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);

    return (
        userFriendlyAddress && (
            <div>
                <p>User-friendly address: {userFriendlyAddress}</p>
                <p>Raw address: {rawAddress}</p>
            </div>
        )
    );
};