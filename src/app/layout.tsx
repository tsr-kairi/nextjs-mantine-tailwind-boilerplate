import "./globals.css";

import { MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import theme from '../theme';

const font = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-mantine-color-scheme="light" lang="en">
      <body className={font.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
