'use client';

/*
Stolen from https://github.com/liect/tma-nextjs-starter/blob/main/app/providers.tsx
 */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { SDKProvider } from '@tma.js/sdk-react';

const queryClient = new QueryClient();
const appRootUrl = process.env.NEXT_PUBLIC_APP_ROOT;
const manifestUrl = process.env.NEXT_PUBLIC_TONCONNECT_MANIFEST_URL;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        returnStrategy: 'back',
        twaReturnUrl: 'https://t.me/gGameTonBot/start',
      }}
    >
      <QueryClientProvider client={queryClient}>
        <SDKProvider>{children}</SDKProvider>
      </QueryClientProvider>
    </TonConnectUIProvider>
  );
}
