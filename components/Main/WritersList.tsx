import { RootState } from '@store'

import { connect, ConnectedProps } from 'react-redux'

import getWriters from '@writersActions'
import { useEffect } from 'react'

const WritersList: React.FC<PropsFromRedux> = ({ getWriters }) => {
  useEffect(() => {
    getWriters()
  }, [])

  return <h1>Printing List</h1>
}

const mapStateToProps = (state: RootState) => {
  return {
    writersList: state.writers.list,
  }
}

const mapDispatchToProps = {
  getWriters,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(WritersList)
