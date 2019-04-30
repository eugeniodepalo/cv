import { Component } from 'react'
import { Provider } from 'react-redux'

export default (createStore: any, Page: any) => {
  return class extends Component<any, any> {
    static async getInitialProps() {
      return { initialState: createStore().getState() }
    }
  
    constructor(props: any) {
      super(props)
      this.state = { store: createStore(props.initialState) }
    }
  
    render() {
      return (
        <Provider store={this.state.store}>
          <Page />
        </Provider>
      )
    }
  }
}
