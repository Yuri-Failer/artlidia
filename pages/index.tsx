import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import bg from '../public/141210__36A1655.jpg'
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
      <main className="w-[90vw] h-[90vh] rounded bg-cover" style={{
        backgroundImage: `url(${bg.src})`,
      }}>
        <h1>{name}</h1>
        <ul>
          { list.map((item) => <li key={item.slice(0, 9)}>{item}</li>) }
        </ul>
        <div>
          <a href="https://facebook.com/lipane.art">facebook.com/lipane.art</a>
        </div>
      </main>
    </>
  )
}
