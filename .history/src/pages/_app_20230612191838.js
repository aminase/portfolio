import Theme from '../styles/theme'
import fav from '../../public/favicon'

export default function App({ Component, pageProps }) {
  return (
    <>
      <link rel='icon' href='.././public/favicon.ico' sizes='32x32' />
      <title>Portfolio | Amina Selimovic</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
