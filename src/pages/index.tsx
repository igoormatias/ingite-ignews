import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { stripe } from '../services/stripe'


import { SubscribeButton } from '../components/SubscribeButton'
import  styles  from './home.module.scss'

interface HomeProps {
  product : {
    priceId: string;
    amount: number;
  }
}
export default function Home({product}: HomeProps) {
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
            <span> por apenas {product.amount} mensais</span>

          </p>
          <SubscribeButton priceId={product.priceId} /> 
        </section>
        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
      
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1Iz6THCucdtOH45GTexrRNg9', {
    expand: ['product']
  }) 

  const product = {
    priceId: price.id,
    amount:  new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency:'BRL'
  }).format(price.unit_amount /100)
  };

  return { 
    props: {
      product,
    }

  }
  
}
