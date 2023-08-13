import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phil Hardegen\'s website',
  description: 'A place to show some of the things that I am doing. It\'s focused on computer programming, and other things I\'m interested in.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='dark' lang="en">
      <body className='bg-white dark:bg-black text-black dark:text-white'>{children}</body>
    </html>
  )
}
