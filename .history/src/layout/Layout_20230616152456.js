import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Document, { Html, Main, NextScript, Head } from 'next/document'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <div>{children}</div>
      <Footer />
    </Container>
  )
}
