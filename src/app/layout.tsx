import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Cursor from './Components/Cursor'
import Header from './Components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev Junior - Desenvolvedor Web',
  description: 'Desenvolvedor Web, especializado em ReactJS, NextJS e NodeJS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <Header />
        {children}
      </body>
    </html>
  )
}
