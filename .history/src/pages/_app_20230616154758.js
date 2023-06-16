import Theme from '../styles/theme'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio | Amina</title>
        <link rel='shortcut icon' type='image/x-icon' sizes='16x16' href='favicon.ico?' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' type='image/png' href='/favicon.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <meta charSet='utf-8' />
        <meta content="software developer's portfolio" name='description'></meta>
        <meta property='og:title' content="Amina\'s portfolio: Everything You Need to Know" />
        <meta property='og:url' content='https://aminase.github.io/portfolio/' />
        <meta property='og:type' content='website' />
        <meta content='summary_large_image' name='twitter:card'></meta>
        <meta content='/favicon.png' property='og:image'></meta>

        {/*<!-- Google / Search Engine Tags -->*/}
        <meta itemprop='name' content='Amina | Portfolio' />
        <meta
          itemprop='description'
          content="Software developers and bioinformaticians's porftolio"
        />
        <meta itemprop='image' content={props.image || defaults.image} />

        {/*<!-- Facebook Meta Tags -->*/}
        <meta property='og:title' content='Amina | Portfolio' />
        <meta
          property='og:description'
          content="Software developers and bioinformaticians's porftolio"
        />
        <meta property='og:image' content={props.image || defaults.image} />
        <meta property='og:url' content={props.title || defaults.title} />
        <meta property='og:type' content='website' />

        {/*<!-- Twitter Meta Tags -->*/}
        <meta name='twitter:title' content='Amina | Portfolio' />
        <meta
          name='twitter:description'
          ccontent="Software developers and bioinformaticians's porftolio"
        />
        <meta name='twitter:image' content={props.image || defaults.image} />
        <meta name='twitter:card' content='summary_large_image' />

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
