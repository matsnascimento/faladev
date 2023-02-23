import '../styles/global.css'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Menu } from '@/components/Menu'
import { Header } from '@/components/Header'
import { Explorer } from '@/components/Explorer'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: {
    default: 'Matheus Nascimento',
    template: '%s | Matheus Nascimento'
  },
  robots: {
    index: true,
    follow: true,
  },
  description: "CTO at @Rocketseat. Passionate about education and changing people's lives through programming.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): any {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-[#7F7FD5] bg-app">
        <div className="z-10 relative h-screen p-20 flex items-center justify-center">
          <div className="bg-[#232135] overflow-hidden border border-[#72707D] w-full max-w-[1480px] aspect-video shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
            <Header />

            <div className="grid grid-cols-editor max-h-full">
              <Menu />
              <Explorer />

              <div className="h-full relative">
                {children}
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
