import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  custId : number;

  cust : Customer;

  loading: boolean = false;
  errorMessage: any;
  message : any;
  searchU: boolean = false;

  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
   // this.id = 
  }

  public searchUser(){
    //this.custId = searchId;
    console.log("inside searchUser");
    console.log(this.custId);
    this.getCustomer();
}

public getCustomer() {
  this.loading = true;
  this.errorMessage = "";
  this.userService.getSingleCust(this.custId)
    .subscribe(
      (response) => {                           //next() callback
        console.log('response received')
        this.loading = true;
        this.cust = response; 
        this.searchU = true;
        console.log(this.cust);
      },
      (error) => {                              //error() callback
        console.error('Request failed with error')
        this.errorMessage = error;
        this.loading = false;
      },
      () => {                                   //complete() callback
        console.error('Request completed')      //This is actually not needed 
        this.loading = false; 
      })
}

}
