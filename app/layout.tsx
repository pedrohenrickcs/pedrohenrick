import Header from '@/components/Header';
import '@/styles/globals.css';

import type { Metadata } from 'next'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pedro Henrick',
    icons: 'https://pedrohenrickcs.github.io/icons/icon-48x48.png?v=1ed0ee1a7f073eadd2a5fe72b0a19f9b'
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
                <main className="container mx-auto px-4">
                    {children}
                </main>
            </body>
        </html>
    )
}