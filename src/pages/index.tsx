import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import  styles  from './home.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 🚀 Olá, Bem vindo</span>
          <h1>Novidades sobre o Universo <span>React</span></h1>
          <p>
            Tenha acesso a todas publicações <br />
            <span> por apenas R$30,00 mensais</span>

          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
      
    </>
  )
}
