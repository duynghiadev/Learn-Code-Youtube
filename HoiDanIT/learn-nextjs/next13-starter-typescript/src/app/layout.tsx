// import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({
  subsets: ['latin']
})

export const metadata = {
  title: 'Duy Nghia Dev',
  description: 'Learn NextJS v13 with Duy Nghia Dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>Duy Nghia Dev</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  )
}
