import { Inter } from 'next/font/google';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import './globals.css';

import ActiveSectionContextProvider from '@/context/ActiveSection';
import ThemeContextProvider from '@/context/Theme';

import Footer from './screens/Footer';
import Header from './components/Header';
import ThemeSwitch from './components/ThemeSwitch';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  description: 'Discover our latest games, music, and more.',
  title: 'GTPD',
};

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
  children: React.ReactNode;
}) {
  return (
    <html className="!scroll-smooth" lang="en">
      <body
        className={`${inter.className} relative bg-gray-50 pt-20 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-24`}
      >
        <div className="absolute -right-48 top-0 -z-10 size-[32rem] rounded-full bg-rose-200 blur-[8rem] dark:bg-[#946263] sm:-right-16 md:right-0 md:blur-[12rem] lg:right-24 lg:size-[40rem] xl:right-32 xl:blur-[16rem]" />
        <div className=" absolute -left-48 top-64 -z-10 size-[32rem] rounded-full bg-indigo-200 blur-[8rem] dark:bg-[#676394] sm:-left-32 md:-left-24 md:blur-[12rem] lg:-left-8 lg:size-[40rem] xl:left-16 xl:blur-[16rem]" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
