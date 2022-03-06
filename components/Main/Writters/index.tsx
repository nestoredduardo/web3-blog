import { RootState } from '@store'
import { connect, ConnectedProps } from 'react-redux'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { getWriters } from '@writersActions'

import WriterItem from './WriterItem'
import Loading from './Loading'

const WritersList: React.FC<PropsFromRedux> = ({
  getWriters,
  writersList,
  total,
}) => {
  const [hasMore, setHasMore] = useState(true)
  const [bounce, setBounce] = useState(true)
  useEffect(() => {
    setTimeout(() => setBounce(false), 1700)
  }, [])

  const handleNext = async () => {
    await getWriters()
    if (!(writersList.length < total!)) {
      setHasMore(false)
    }
  }

  if (writersList) {
    return (
      <section className={`${bounce ? 'animate-bounce-in-top' : ''} my-10`}>
        <InfiniteScroll
          dataLength={writersList.length}
          next={handleNext}
          hasMore={hasMore}
          loader={<Loading />}
        >
          {writersList.map((writer) => {
            return <WriterItem key={writer.id} writer={writer} />
          })}
        </InfiniteScroll>
      </section>
    )
  }

  return <h2>Error</h2>
}

const mapStateToProps = (state: RootState) => {
  return {
    writersList: state.writers.list,
    total: state.writers.total,
  }
}

const mapDispatchToProps = {
  getWriters,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(WritersList)
