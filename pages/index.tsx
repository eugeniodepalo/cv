import { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from './index/createStore'
import IndexPage from './index/page'

export default class IndexContainer extends Component<any, any> {
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
        <IndexPage />
      </Provider>
    )
  }
}
