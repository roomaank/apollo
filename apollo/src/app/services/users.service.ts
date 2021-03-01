import { CreateUserInput } from '../models/create-user.input';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { createUser } from '../users.graphql';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apollo: Apollo) { }

  loadUser(createUserData : CreateUserInput): any {
    const mutation = {
      mutation: createUser,
      variables: {createUserData}
    };
    return this.apollo.mutate(mutation).pipe(
      map((response: ApolloQueryResult<any>) => {
        console.log(response);
        return;
      })
    );
  }

}
