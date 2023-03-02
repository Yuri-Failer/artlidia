import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import bg from '../public/elefants.jpg'
import {useContext, useState} from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import {LanguageContext, LanguageType} from "../context/LanguageContext";

export default function Home() {
  const { language } = useContext(LanguageContext);
  const content: { [key in LanguageType]?: {
    name: string,
    list: string[]
  } } = {
    en: {
      name: 'Lidia Nekliuienko',
      list: ['Drawing teacher for all ages', 'Pictures, portraits to order'],
    },
    ru: {
      name: 'Лидия Неклюенко',
      list: ['Учитель рисования для всех возрастов', 'Картины, портреты на заказ'],
    },
  };
  const { name, list } = content[language]!;
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
        <div className="m-2 p-6 xl:m-10 xl:p-20 justify-center  h-full flex flex-col rounded">
          <div>
            <h1 className="text-center xl:text-left text-5xl xl:text-6xl font-bold text-main-red mt-[20vh] mb-4 ">{name}</h1>
            <ul className="max-w-2xl ml-auto mr-auto text-3xl xl:ml-0 xl:mr-0 xl:max-w-none xl:text-4xl list-inside  xl:list-disc xl:leading-snug">
              { list.map((item) => <li key={item.slice(0, 9)}>{item}</li>) }
            </ul>
          </div>
          <div className="text-3xl font-bold xl:text-4xl underline text-main-red mt-auto self-center justify-self-end">
            <a href="https://facebook.com/lipane.art">facebook.com/lipane.art</a>
          </div>
          <LanguageSwitcher />
        </div>
      </main>
    </>
  )
}
