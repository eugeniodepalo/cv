import NextDocument, { Head, Main, NextScript, NextDocumentContext, RenderPageResponse } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ReactNode } from 'react'

interface Props extends RenderPageResponse {
  styleElement: ReactNode
}

export default class Document extends NextDocument<Props> {
  public static getInitialProps({ renderPage }: NextDocumentContext): Props {
    const styleSheet = new ServerStyleSheet()
    const page = renderPage((App: any) => (props: any) => styleSheet.collectStyles(<App {...props} />))
    return { ...page, styleElement: styleSheet.getStyleElement() }
  }

  public render(): ReactNode {
    return (
      <html lang="en">
        <Head>{this.props.styleElement}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
