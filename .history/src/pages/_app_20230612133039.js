import Theme from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <link rel='icon' href='./favicon.ico' />

      <title>Portfolio | Amina Selimovic</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
