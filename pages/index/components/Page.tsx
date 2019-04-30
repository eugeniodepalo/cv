import { connect } from 'react-redux'
import styled from 'styled-components'
import Layout from 'cv/components/Layout'
import { incrementCount, decrementCount } from '../actions'

// eslint-disable-next-line no-undef
const Button = styled.button<any>`
  background-color: ${({ count }: any) => (count >= 0 ? 'green' : 'red')};
`

const Page = ({ count, ...actions }: any) => {
  return (
    <Layout title="CV">
      <p>Current count: {count}</p>
      <Button onClick={actions.incrementCount} count={count}>
        Increment
      </Button>
      <Button onClick={actions.decrementCount} count={count}>
        Decrement
      </Button>
    </Layout>
  )
}
const mapStateToProps = (state: any) => ({ count: state.count })
const mapDispatchToProps = { incrementCount, decrementCount }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
