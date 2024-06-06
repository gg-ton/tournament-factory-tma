'use client';

import { usePathname } from 'next/navigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Footer from './Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007aff',
    },
  },
});

type ClientLayoutProps = {
  children: React.ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      {!isHomePage && <Footer />}
    </ThemeProvider>
  );
}
