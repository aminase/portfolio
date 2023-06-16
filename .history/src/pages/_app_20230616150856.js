import Theme from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Portfolio | Amina</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
