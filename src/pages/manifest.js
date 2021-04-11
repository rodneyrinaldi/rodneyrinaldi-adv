import Head from 'next/head'
import Link from 'next/link'

import Contact from '../components/contact'
import Header from '../components/header'

import styles from '../styles/manifest.module.css'

export default function Manifest() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Head>
        <title>adv.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact showback='yes' />

      <main className={styles.main}>
        <Header />

        <div className={styles.title}>
          <h1>MANIFESTO INSTITUCIONAL</h1>
        </div>

        <div className={styles.grid}>
          <p>
            Este manifesto dá-se publicidade ao comprometimento primordial em seguir as melhores e possíveis
            políticas de pesquisa, desenvolvimento, comercialização e suporte a todos os produtos e serviços
            desempenhados isolada ou compartilhadamente.
          </p>
          <p>
            Possuindo como valores essenciais vivenciados em todas as atividades:
            a) o respeito aos clientes, aos colaboradores, a sociedade e aos meios ambientes;
            b) o respeito a aplicabilidade das normas, das leis, das convenções e dos costumes;
            c) o respeito a concorrência legal, ética e justa;
            d) o respeito a precificação justa, sustentável e competitiva.
          </p>
          <p>
            Aplicando como princípios em todas as interações:
            a) entender primeiro a necessidade do cliente antes de sugirir soluções;
            b) registrar interações e especificações de forma simples e eficiênte;
            c) compromisso com a qualidade e tempo, entregas pontuais, e nunca entregar uma má prestação;
            d) fazer primeiro e cobrar depois, sempre que possível trabalhar com provas de conceito primeiramente.
          </p>
        </div>

      </main>

      <session className={styles.midias}>
        <a href="https://www.linkedin.com/in/rodneyrinaldi/">linkedin.com/in/rodneyrinaldi/</a>
        <a href="https://github.com/rodneyrinaldi">github.com/rodneyrinaldi</a>
      </session>

      <footer className={styles.footer}>
        <a href="https://dev.rodneyrinaldi.com">dev.rodneyrinaldi.com</a>
        <a href="https://rodneyrinaldi.com"><img src="/rr-logo-dev.svg"
          alt="rodneyrinaldi" /></a>
        <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
      </footer>


    </div>
  )
}
