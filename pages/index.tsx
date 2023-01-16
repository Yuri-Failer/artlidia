import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import bg from '../public/elefants.jpg'
import {useState} from "react";
type Language = 'en' | 'he' | 'ru';

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const content: { [key in Language]?: {
    name: string,
    list: string[]
  } } = {
    en: {
      name: 'Lidia Nekliuienko',
      list: ['Drawing teacher for all ages', 'Pictures, portraits to order'],
    },
  };
  const { name, list } = content[lang]!;
  return (
    <>
      <Head>
        <title>ArtLidia.com</title>
        <meta name="description" content="Artist's personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center  m-auto h-[100vh] rounded bg-cover bg-center" style={{
        backgroundImage: `url(${bg.src})`,
      }}>
        <div className="ml-20">
          <h1 className="text-6xl font-bold text-main-red mt-[30vh] ">{name}</h1>
          <ul className="text-4xl">
            { list.map((item) => <li key={item.slice(0, 9)}>{item}</li>) }
          </ul>
        </div>

        <div className="text-4xl text-main-red mt-auto mb-10 self-center">
          <a href="https://facebook.com/lipane.art">facebook.com/lipane.art</a>
        </div>

      </main>
    </>
  )
}
