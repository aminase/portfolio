import Theme from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Amina</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
