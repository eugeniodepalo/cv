import createContainer from '~/createContainer'
import rootCreateStore from '~/createStore'
import reducer from './index/reducer'
import Page from './index/components/Page'
import saga from './index/saga'

const createStore = (state = {}): any => rootCreateStore(reducer, state, saga)
export default createContainer(createStore, Page)
