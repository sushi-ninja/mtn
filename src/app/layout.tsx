import React from 'react'
import type { Metadata } from 'next'
import { Nanum_Gothic } from 'next/font/google'
import './globals.css'
import Header from './components/common/MNTheader'
import Footer from './components/common/MNTfooter'

const nanumGothic = Nanum_Gothic({
  weight: ['400', '700', '800'],
  preload: false,
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: '탑픽전쟁 - MNT 머니투데이방송',
  description: '탑픽전쟁 머니투데이방송 입니다.',
  icons: {
    icon: '/mtnfavicon.png'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={nanumGothic.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
