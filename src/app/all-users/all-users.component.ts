import { Component, OnInit } from '@angular/core';

import { Customer2 } from '..//customer2';
import { UserServiceService } from '../user-service.service';
import Swal from 'sweetalert2';


//import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  title = 'GetDataSpringBoot';

  sortBy : string = "cjob";

  currentItem = 'Television';

  p: number = 1;

  delId: number;

  //customers: Customer2[];
  cust: Customer2;

  customers : any;

  loading: boolean = false;
  deleteDone: boolean = false;
  errorMessage: any;
  message: any;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  public getAllCustomers() {
    this.loading = true;
    this.errorMessage = "";
    this.userService.getAllCustomers( this.sortBy)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received');
          this.customers = response;
          console.log(this.customers);
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


  public custDel(id: number) {
    this.delId = id;


    Swal.fire({
      title: 'Are you sure?',
      text: 'You will lose the Customer Record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteCust(this.delId)
          .subscribe(
            (response) => {
              console.warn("response received")
              this.message = response;
              this.deleteDone = true;
            },
            (err) => {
              console.warn("Error occurred bro")
            }
          )

        Swal.fire(
          'Deleted!',
          'Customer Record(Id number: ' +this.delId +  ') has been deleted.',
          'success'
        )
        this.getAllCustomers();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Record not Deleted :)',
          'error'
        )
      }
    })
  }

  closeAlert() {
    this.deleteDone = false;
  }


  sortById()
  {
    
    this.sortBy = "cid";
    this.getAllCustomers();
  }

  sortByName()
  {
    
    this.sortBy = "cname";
    this.getAllCustomers();
  }

  sortByJob()
  {
    
    this.sortBy = "cjob";
    this.getAllCustomers();
  }

  sortByGender()
  {
    
    this.sortBy = "gender";
    this.getAllCustomers();
  }


}
