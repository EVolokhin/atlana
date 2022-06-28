import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
import reportWebVitals from './reportWebVitals'
import App from './App'

import './index.scss'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  return{
    headers: {
      ...headers,
      authorization: 'Bearer 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',
      }
    }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
