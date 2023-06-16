import Theme from '../styles/theme'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio | Amina</title>
        <link rel='shortcut icon' type='image/x-icon' href='favicon.ico?' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' type='image/png' href='/favicon.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <meta content="software developer's portfolio" name='description'></meta>
        <meta property='og:title' content="Amina\'s portfolio: Everything You Need to Know" />
        <meta property='og:url' content='https://aminase.github.io/portfolio/' />
        <meta property='og:type' content='website' />
        <meta content='summary_large_image' name='twitter:card'></meta>
        <meta content='/favicon.png' property='og:image'></meta>
        <meta content='Amina | Portfolio' property='twitter:title'></meta>
        <meta
          content="Software developers and bioinformaticians's porftolio"
          property='twitter:description'
        ></meta>
        <meta
          property='og:description'
          content='More about one software developer and bioinformatician'
        />
        <meta property='og:locale' content='en_GB' />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
