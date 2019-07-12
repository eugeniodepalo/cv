import createContainer from '~/createContainer'
import rootCreateStore from '~/createStore'
import reducer, { State } from './index/reducer'
import Page from './index/components/Page'
import saga from './index/saga'

export default createContainer<State>((state) => rootCreateStore(reducer, state, saga), Page)
