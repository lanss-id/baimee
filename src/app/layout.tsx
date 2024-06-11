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
  title: 'Baimee Care',
  description: 'Perawatan untuk sang ibu dan bayi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${comfortaa.variable} ${englebert.variable}`}>
      <body>{children}</body>
    </html>
  )
}
