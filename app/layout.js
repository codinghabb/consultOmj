
import {  Comfortaa } from 'next/font/google'
import './globals.css'
import Header from './components/nav'

const comfortaa = Comfortaa({ subsets: ['latin'] })

export const metadata = {
  title: 'consult OmJ',
  description: 'consultiong Executive',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      
      <body className={comfortaa.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
