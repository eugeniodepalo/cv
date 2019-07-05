import { shallow } from 'enzyme'
import Page from './Page'

describe('With Enzyme', () => {
  it('renders', () => {
    const layout = shallow(<Page />)
    expect(layout.exists()).toBe(true)
  })
})
