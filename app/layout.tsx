import { ReactNode } from 'react';
import ClientLayout from './components/ThemeProvider';
import { Providers } from '@/app/providers';
import TonConnectWrapper from '@/components/TonConnectWrapper';

export const metadata = {
  title: 'gg.ton',
  description: 'TMA.js SDK + TON Connect UI',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientLayout>
            <TonConnectWrapper />
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
