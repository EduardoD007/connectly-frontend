
import { Provider } from 'react-redux'
import './App.css'
import  Main from './Components/Main/index.tsx'
import store from './store/index.tsx'
import Header from './Components/Header/index.tsx'
import { ApolloProvider } from '@apollo/client/react'
import { client } from './apollo';

function App() {

  return (
    <div className='App'>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Header/>
        <Main />
      </Provider>
    </ApolloProvider>
    </div>
  )
}

export default App
