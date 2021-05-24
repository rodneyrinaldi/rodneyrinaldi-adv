import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'
import Title from '../../components/title'

import styles from '../../styles/representation.module.css'

export default function Family() {
  return (<>
    <Layout showback='yes'>
      <Title title="Ações de família" />
      <div className={styles.row}>
        <h1>Segundo a Constituição Federal a família é base da sociedade e tem especial proteção do Estado.</h1>
        <div className={styles.image}>
          <Image
            src="/article-family.png"
            alt="Família"
            width={800}
            height={300}
          />
        </div>
        <p>Para a sociologia a família é representada pela agregação de indivíduos unidos por laços afetivos ou de parentesco, com o objetivo de desenvolvimento mútuo, sendo os adultos responsáveis pelos menores.</p>
        <p>Por este motivo todas as decisões referentes ao assunto devem ser desenvolvidas com cuidados especiais, lenvando-se em consideração o princípio do melhor interesse para a criança conforme entendimento do Superior Tribunal de Justiça (STJ).</p>
        <p style={{ paddingBottom: '0' }}>Metodologia de trabalho:</p>
        <p>
          <ul>
            <li>Procurar o entendimento, exaurir as possibilidades de manutenção familiar, exercício racional de concessões recíprocas;</li>
            <li>Aceitação mútua da situação com urbanismo focando-se no melhor para todos, colocando-se os menores como destinatários de maiores cuidados, evitar processos judiciais fazendo uso dos sistemas de consciliação/mediação;</li>
            <li>Representação conjunta das partes objetivando a racionalização dos custos que representaram uma degradação financeira e emocional em uma relação que possivelmente se alongará no tempo pela prole;</li>
            <li>Por fim, representação individualizada e civilizada objetivando-se o rompimento legal de uma relação jurídica tomando-se os cuidados mais diligentes para a manutenção a continuidade do padrão socio económico possível.</li>
          </ul>
        </p>
        <p style={{ paddingBottom: '0' }}>Atividade desenvolvidas</p>
        <p style={{ paddingBottom: '40px' }}>
          <ul style={{ listStyleType: 'circle' }}>
            <li>Casamentos;</li>
            <li>Uniões estáveis;</li>
            <li>Uniões homoafetivas</li>
            <li>Famílias simultâneas</li>
            <li>Separações e divórcios;</li>
            <li>Dissoluções de uniões de todos os tipos;</li>
            <li>Guarda e visitas</li>
            <li>Alimentos</li>
            <li>Partilha</li>
            <li>Testamentos</li>
          </ul>
        </p>
        <p>Clique abaixo e baixe a procuração e o contrato de serviços, assine igual a identidade, envie junto com o restante dos documentos.</p>
        <input type="submit" value="EMITIR O CONTRATO E A PROCURAÇÃO" className={styles.button} />
        <p>Em caso de dúvidade entre em contato!</p>
      </div>
    </Layout>
  </>)
}