import { Component } from 'react'
import { Provider } from 'react-redux'

export default (createStore: any, Page: any) =>
  class extends Component<any, any> {
    public static async getInitialProps(): Promise<any> {
      return { initialState: createStore().getState() }
    }

    public constructor(props: any) {
      super(props)
      this.state = { store: createStore(props.initialState) }
    }

    public render(): JSX.Element {
      const { store } = this.state

      return (
        <Provider store={store}>
          <Page />
        </Provider>
      )
    }
  }
