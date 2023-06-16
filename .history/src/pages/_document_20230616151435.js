import Document, { Html, Main, NextScript, Head } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
