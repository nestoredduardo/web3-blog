import '../styles/globals.css'
import '../styles/magic.css'

import type { AppProps } from 'next/app'

import generateStore from '@store'
import { Provider } from 'react-redux'

import Layout from '@components/Layout'

const store = generateStore()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
