import { ApolloClient, InMemoryCache } from "@apollo/client";
import { URL_GRAPHQL } from "../constants";

export const client = new ApolloClient({
  uri: URL_GRAPHQL,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_REST_ACCESS_TOKEN}`,
  },
});
