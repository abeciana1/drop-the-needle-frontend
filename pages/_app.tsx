import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/core/_nav/NavBar'
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavBar/>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
