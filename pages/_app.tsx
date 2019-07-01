import { Reset } from 'styled-reset'
import NextApp, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '~/theme'

export default class App extends NextApp {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Reset />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
