import NextDocument, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  RenderPageResponse,
  AnyPageProps
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ReactNode } from 'react'
import { ComponentType } from 'enzyme'

interface Props extends RenderPageResponse {
  styleElement: ReactNode
}

export default class Document extends NextDocument<Props> {
  public static getInitialProps({ renderPage }: NextDocumentContext): Props {
    const styleSheet = new ServerStyleSheet()

    const page = renderPage((App: ComponentType<AnyPageProps>) => (props) =>
      styleSheet.collectStyles(<App {...props} />)
    )

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
