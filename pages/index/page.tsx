import Head from 'next/head';
import { Fragment } from 'react';
import { connect } from 'react-redux'
import { incrementCount, decrementCount } from './actions'

const Page = ({ count, incrementCount, decrementCount }: any) => {
  return (
    <Fragment>
      <Head>
        <title>Eugenio Depalo - CV</title>
      </Head>

      <span>Current count: {count}</span>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </Fragment>
  )
}
const mapStateToProps = (state: any) => ({ count: state.count })
const mapDispatchToProps = { incrementCount, decrementCount }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
