import type { Metadata } from 'next'
import { Comfortaa, Englebert } from 'next/font/google'
import './globals.css'

const comfortaa = Comfortaa({
  weight: ['300', '500', '700'],
  variable: '--font-comfortaa',
  subsets: ['latin'],
})

const englebert = Englebert({
  weight: ['400'],
  variable: '--font-englebert',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Baimee Care - Layanan Kesehatan Terbaik untuk Ibu dan Bayi',
  description: 'Baimee Care menyediakan perawatan kesehatan komprehensif dan berkualitas tinggi untuk ibu dan bayi, termasuk pijat bayi, pijat ibu hamil, baby spa, dan layanan kesehatan lainnya. Dapatkan perawatan terbaik untuk kesehatan dan kesejahteraan Anda dan bayi Anda bersama Baimee Care.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${comfortaa.variable} ${englebert.variable}`}>
      <body className='bg-[#FBF3DE]'>{children}</body>
    </html>
  )
}
