import Theme from '../styles/theme'
import fev from 'log.png'

export default function App({ Component, pageProps }) {
  return (
    <>
      <link rel='icon' href='/log.png' sizes='32x32' />
      <title>Portfolio | Amina Selimovic</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
