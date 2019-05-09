import { shallow } from 'enzyme'
import Layout from './Layout'

describe('With Enzyme', () => {
  it('renders', () => {
    const layout = shallow(<Layout />)
    expect(layout.exists()).toBe(true)
  })
})
