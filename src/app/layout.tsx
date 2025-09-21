import Lightswitch from './components/lightswitch'
import MenuItem from './components/menu-item'
import NavMenu from './components/nav-menu'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phil Hardegen\'s website',
  description: 'A place to show some of the things that I am doing. It\'s focused on computer programming, and other things I\'m interested in.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='dark' lang="en">
      <body className='bg-white dark:bg-black text-black dark:text-white'>
        <NavMenu>
          <Lightswitch />
          <MenuItem name={'Blog'} href={'/blog'}></MenuItem>
          <MenuItem name={'About'} href={'/about'}></MenuItem>
        </NavMenu>
        <div className='container font-sans'>
          {children}
        </div>
      </body>
    </html>
  )
}
