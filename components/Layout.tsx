import Header from '@components/Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
    </div>
  )
}

export default Layout
