import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './routes'
import { ApolloProvider } from '@apollo/client/react'
import { client } from './apollo'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </StrictMode>,
)

