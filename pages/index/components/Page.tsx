import { connect } from 'react-redux'
import Layout from '~/components/Layout'
import cv from '../cv'

const Position = ({ position }: any) => {
  return <p>{position.description}</p>
}

const Page = () => {
  return (
    <Layout title="CV">
      {cv.map((p: any, index) => (
        <Position position={p} key={index.toString()} />
      ))}
    </Layout>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
