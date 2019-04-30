import { connect } from 'react-redux'
import styled from 'styled-components';
import { incrementCount, decrementCount } from '../actions'
import Layout from 'cv/components/Layout'

const Button = styled.button<any>`
  background-color: ${props => props.count >= 0 ? 'green' : 'red'}
`

const Page = ({ count, incrementCount, decrementCount }: any) => {
  return (
    <Layout title="CV">
      <span>Current count: {count}</span>
      <Button onClick={incrementCount} count={count}>Increment</Button>
      <Button onClick={decrementCount} count={count}>Decrement</Button>
    </Layout>
  )
}
const mapStateToProps = (state: any) => ({ count: state.count })
const mapDispatchToProps = { incrementCount, decrementCount }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
