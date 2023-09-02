import { ApolloProvider } from "@apollo/client";
import { client } from "../config/graphql";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes";

const Providers = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};

export default Providers;
