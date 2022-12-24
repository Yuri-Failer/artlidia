import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>ArtLidia.com</title>
        <meta name="description" content="Artist's personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-[90vw] h-[90vh] rounded ">
        <h1>Lidia Nekliuienko</h1>
        <ul>
          <li>Drawing teacher for all ages</li>
          <li>Pictures, portraits to order</li>
        </ul>
        <div>
          <a href="https://facebook.com/lipane.art">facebook.com/lipane.art</a>
        </div>
      </main>
    </>
  )
}
