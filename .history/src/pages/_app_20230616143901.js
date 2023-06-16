import Theme from '../styles/theme'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <meta content="software developer's portfolio" name='description'></meta>
        <meta property='og:title' content="Amina\'s portfolio: Everything You Need to Know" />
        <meta property='og:url' content='https://aminase.github.io/portfolio/' />
        <meta property='og:type' content='website' />
        <meta content='summary_large_image' name='twitter:card'></meta>
        <meta content='../../public/amina_meta_image.png' property='og:image'></meta>
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
      <link rel='icon' sizes='32x32' />
      <title>Portfolio | Amina</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
