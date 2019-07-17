import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import createMockStore from '~/test/createMockStore'
import theme from '~/theme'
import Page from './Page'
import IndexSaga from '../saga'
import { State } from '../reducer'

const mockStore = createMockStore<State>(IndexSaga)

describe('rendering', () => {
  test('it matches snapshot', () => {
    const initialState: State = {
      repos: {
        results: [],
        isFetching: true,
        error: null
      }
    }

    const store = mockStore(initialState)

    const page = mount(
      <ThemeProvider theme={theme}>
        <Page store={store} />
      </ThemeProvider>
    )

    expect(page).toMatchSnapshot()
  })
})
