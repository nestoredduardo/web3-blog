import Search from './Search'
import Title from './Title'
import WritersList from './Writters'

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
