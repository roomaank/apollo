import { CreateUserInput } from './models/create-user.input';
import { gql } from "apollo-angular";

export const getUser = gql`
  mutation GetUserMutation($createUserData: CreateUserInput!) {
    createUser(createUserData: $createUserData) {
      email
      age
    }
  }
`;