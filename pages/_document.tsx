import NextDocument, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class Document extends NextDocument<any> {
  static getInitialProps({ renderPage }: any) {
    const styleSheet = new ServerStyleSheet()

    const page = renderPage((App: any) => (props: any) => styleSheet.collectStyles(<App {...props} />))

    return { ...page, styleTags: styleSheet.getStyleElement() }
  }

  render() {
    return (
      <html lang="en">
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
