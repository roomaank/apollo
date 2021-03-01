import { gql } from "apollo-angular";

export const createUser = gql`
  mutation CreateUserMutation($createUserData: CreateUserInput!) {
    createUser(createUserData: $createUserData) {
      success
      error
    }
  }
`;