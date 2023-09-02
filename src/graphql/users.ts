import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers($cursor: String) {
    users(after: $cursor) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      totalCount
      nodes {
        id
        name
        email
        gender
        status
      }
    }
  }
`;
