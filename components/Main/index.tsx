import Search from './Search'
import Title from './Title'
import WritersList from './WritersList'

const Main: React.FC = () => {
  return (
    <main className="flex flex-col items-center">
      <Title />
      <Search />
      <WritersList />
    </main>
  )
}

export default Main
