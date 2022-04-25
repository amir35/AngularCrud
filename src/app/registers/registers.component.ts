import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Customer } from '../customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent implements OnInit {


  alert : boolean = false;
  customer : Customer = new Customer();
  message : any;

  constructor(private userService : UserServiceService) {
   }

  ngOnInit(): void {
  }

  public registerNow()
  {
    console.log("inside component 1")
    this.userService.addPerson(this.customer)
      .subscribe(data => {
        console.log(data)
        console.log("inside component");
        this.message = data;
        this.alert=true;
        //this.refreshPeople();
      })      
  }

  closeAlert(){
    this.alert=false;
    
  }

}
