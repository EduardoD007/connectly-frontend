import './PaginaPadrao.css'
import Main from '../Main'
import { Provider } from 'react-redux'
import store from '../../store'
import '../../App.css'
import Header from '../Header'
import Footer from '../Footer'
import { useEffect } from 'react'

export default function PaginaPadrao() {

  useEffect(() => {
    document.title = "Connectly - A sua rede social! ";
  }, []);
  
  return (
    <div className='App'>
      <Provider store={store}>
        <Header/>
        <Main />
        <Footer/>
      </Provider>
    </div>
  )
}