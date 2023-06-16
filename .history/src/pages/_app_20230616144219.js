import Theme from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
      </Head>
      <link rel='icon' sizes='32x32' />
      <title>Portfolio | Amina</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
