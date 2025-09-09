import { HttpLink } from "@apollo/client"
import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:3000/dev/graphql",
  }),
  cache: new InMemoryCache()
})