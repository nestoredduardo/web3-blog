import Header from '@components/Header'
import Footer from '@components/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
