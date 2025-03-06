import type { Metadata } from 'next'
import { DM_Sans as DMSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils/cn'

const dmSans = DMSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dark SaaS Landing Page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(dmSans.className, 'antialiased')}>{children}</body>
    </html>
  )
}
