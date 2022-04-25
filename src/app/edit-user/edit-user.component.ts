import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  id : number;

  alert : boolean = false;

  cust : Customer;
  customer : Customer = new Customer();

  loading: boolean = false;
  errorMessage: any;
  message : any;

  constructor(private route: ActivatedRoute, 
              private userService : UserServiceService,
              private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getCustomer();
    console.log(this.id);
  }

  
  public getCustomer() {
    this.loading = true;
    this.errorMessage = "";
    this.userService.getSingleCust(this.id)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.cust = response; 

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
  

  onSubmit(contactForm : Customer){
    console.log(contactForm);
    console.log("inside component 1")
    console.warn(this.customer);
    this.userService.updateCust(this.id,contactForm)
      .subscribe(data => {
        console.log(data)
        console.log("inside component");
        this.message = data;
        this.alert=true
        //this.getRepos();
        this.router.navigateByUrl('/all-users');
        alert("User Information Updated Successfully");

      })   
  }

  public closeAlert(){
    this.alert = false;
  }



  @Input() item = ''; // decorate the property with @Input()
  @Input() count: number = 0;

}
