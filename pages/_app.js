import {AppProvider} from '../context/AppProvider';
import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
