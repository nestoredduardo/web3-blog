import Search from './Search'
import Title from './Title'

const Main: React.FC = () => {
  return (
    <main className="flex flex-col items-center">
      <Title />
      <Search />
    </main>
  )
}

export default Main
