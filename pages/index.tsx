import createContainer from '~/createContainer'
import rootCreateStore from '~/createStore'
import reducer from './index/reducer'
import Page from './index/components/Page'

const initialState = {
  count: 0
}

const createStore = (state = initialState): any => rootCreateStore(reducer, state)

export default createContainer(createStore, Page)
