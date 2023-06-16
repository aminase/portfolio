import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <Header />
      <div>{children}</div>
      <Footer />
    </Container>
  )
}
