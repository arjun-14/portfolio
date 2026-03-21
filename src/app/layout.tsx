import type { Metadata } from 'next'
import { Inter, Lora, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  style: ['normal', 'italic'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Arjun Adukathil — Data Engineer',
  description:
    'Personal portfolio of Arjun Adukathil — Data Engineer, builder, and gamer based in College Station, TX.',
  openGraph: {
    title: 'Arjun Adukathil — Data Engineer',
    description: 'Data Engineer · Builder · Gamer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
