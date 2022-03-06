import { RootState } from '@store'
import { connect, ConnectedProps } from 'react-redux'
import { useEffect } from 'react'

import { getWriters } from '@writersActions'

import Search from './Search'
import Title from './Title'
import WritersList from './Writters'
import PageLoader from '@components/PageLoader'

const Main: React.FC<PropsFromRedux> = ({ firstLoading, getWriters }) => {
  useEffect(() => {
    getWriters()
  }, [])

  if (firstLoading) {
    return <PageLoader />
  }

  return (
    <main className="flex flex-col items-center">
      <Title />
      <Search />
      <WritersList />
    </main>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    firstLoading: state.writers.firstLoading,
  }
}

const mapDispatchToProps = {
  getWriters,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Main)
