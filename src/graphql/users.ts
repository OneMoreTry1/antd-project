import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers($before: String, $after: String) {
    users(before: $before, after: $after) {
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

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: Int!
    $name: String
    $email: String
    $gender: String
    $status: String
  ) {
    updateUser(
      input: {
        id: $id
        name: $name
        email: $email
        gender: $gender
        status: $status
      }
    ) {
      user {
        id
      }
    }
  }
`;
