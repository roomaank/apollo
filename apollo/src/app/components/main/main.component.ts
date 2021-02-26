import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  users: any[];
  loading: true;
  error: any;

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`
        {
          user(userId: "80fcab51-392a-4a2c-8dc7-f2e35c29eb70"){
            email 
            age
          }
        }
      `,
    })
      .valueChanges.subscribe((result: any) => {
        this.users = result?.data?.user;
        this.loading = result.loading;
        this.error = result.error;
        console.log(this.users);
        
      })


  }

}
