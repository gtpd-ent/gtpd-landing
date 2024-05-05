import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GTPD - Official Site',
  description: 'Discover our latest games, music, and more.',
}

/*
Our slogan is currently on vacation. Please leave a message.
This slogan is brought to you by procrastination.
Insert witty slogan here.
Slogan loading... 99% complete.
We'd tell you our slogan, but then we'd have to think of one.
Slogan.exe has stopped responding.
Slogan under construction. Please excuse the mess.
These are not the slogans you're looking for
"Hey, did you get the slogan printed?"
Now hiring: Slogan position available!
Slogan not found. Please try again later.
Your slogan is in another castle.
Slogan not included. Batteries sold separately.
Holy slogans, Batman!
May the slogan be with you.
I am vengeance, I am the night, I am... a slogan.
With great slogans comes great responsibility.
It's dangerous to go alone! Take this slogan.
Slogan, I am your father.
I'm sorry, Dave. I'm afraid I can't slogan.
Hola mi nombre es gonza y esto una prueba de texto
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]'/>
        <div />
        {children}
      </body>
    </html>
  )
}
