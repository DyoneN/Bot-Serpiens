import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bot Serpiens',
  description: 'O primeiro Bot que integra tudo1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]" >{children}</body>
    </html>
  )
}
