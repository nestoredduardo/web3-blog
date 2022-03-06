import '../styles/globals.css'
import '../styles/magic.css'
import 'react-toastify/dist/ReactToastify.min.css'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'

import generateStore from '@store'
import Layout from '@components/Layout'

const store = generateStore()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress color="#00E1C9" options={{ showSpinner: false }} />
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
