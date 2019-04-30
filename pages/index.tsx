import createContainer from 'cv/createContainer'
import cvCreateStore from 'cv/createStore'
import reducer from './index/reducer'
import Page from './index/components/Page'

const initialState = {
  count: 0
}

const createStore = (state = initialState) => {
  return cvCreateStore(reducer, state)
}

export default createContainer(createStore, Page)
