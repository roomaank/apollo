import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, ApolloBase } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apollo: ApolloBase;

  constructor(
    private apolloProvider: Apollo
  ) { 
    this.apollo = this.apolloProvider.use('clientName');
   }

   getData(): Observable<ApolloQueryResult> {
     return this.apollo.watchQuery({
      query: gql`
      {
        user(userId: "80fcab51-392a-4a2c-8dc7-f2e35c29eb70"){
          email 
          age
        }
      }
    `,
     })
   }

}
