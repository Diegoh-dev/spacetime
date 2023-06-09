import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Signin from '@/components/Signin'
import './globals.css'
import { Roboto_Flex as Roboto,Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import Copyright from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'],variable:'--font-roboto' })
const baiJamjuree = BaiJamjuree({subsets:['latin'], weight: '700', variable:'--font-bai-jamjuree'})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        <main className="grid min-h-screen grid-cols-2">
      {/* left */}
      <div className="px28 relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-start.svg)]">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

       { isAuthenticated ? <Profile/> : <Signin />}

        <Hero />
{/* parei 21:00 */}
        <Copyright />
      </div>

      {/* right */}
      <div className="flex max-h-screen overflow-y-scroll flex-col bg-[url(../assets/bg-start.svg)] bg-cover p-16">
      {children}
      </div>
    </main>
      </body>
    </html>
  )
}
