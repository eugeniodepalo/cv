import { Reset } from 'styled-reset'
import NextApp, { Container } from 'next/app'

export default class App extends NextApp {
  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Reset />
        <Component {...pageProps} />
      </Container>
    )
  }
}
