import Header from '@/components/Header';
import '@/styles/globals.css';

import type { Metadata } from 'next'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedro Henrick',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-color`}>
        <Header />
        {children}
      </body>
    </html>
  )
}