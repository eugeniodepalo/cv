import { Component, ComponentType } from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'

interface Props<S> {
  initialState: S
}

interface State<S> {
  store: Store<S>
}

type CreateStoreFunction<S> = (initialState?: S) => Store<S>

export default function<S>(createStore: CreateStoreFunction<S>, Page: ComponentType) {
  return class extends Component<Props<S>, State<S>> {
    public static async getInitialProps(): Promise<Props<S>> {
      return { initialState: createStore().getState() }
    }

    public constructor(props: Props<S>) {
      super(props)
      this.state = { store: createStore(props.initialState) }
    }

    public render() {
      const { store } = this.state

      return (
        <Provider store={store}>
          <Page />
        </Provider>
      )
    }
  }
}
