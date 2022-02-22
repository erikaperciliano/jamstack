import { Provider } from 'urql'
import { client, ssrCache } from '../lib/urql'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  //se já tiver feito um query pelo lado do server side da app e estiver utilizando os mesmos dados dessa query
  //no cliente side, não será feito uma query de novo
    if(pageProps.urlState) {
      ssrCache.restoreData(pageProps.urqlState);
    }

  return (
    <Provider value={client}>
      <Component {...pageProps}/>
    </Provider>
  )
}

export default MyApp
