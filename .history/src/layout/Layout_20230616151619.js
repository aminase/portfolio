import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Portfolio | Amina</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='../public/favicon.ico' />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </Container>
  )
}
