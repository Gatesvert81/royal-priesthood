import Context from '../src/Components/Context'
import Navigation from '../src/Components/Navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Navigation />
      <Component {...pageProps} />
    </Context>
  )
}

export default MyApp
