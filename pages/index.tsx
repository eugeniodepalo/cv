import createContainer from '../lib/createContainer'
import createStore from './index/createStore';
import Page from './index/components/Page'

export default createContainer(createStore, Page)
