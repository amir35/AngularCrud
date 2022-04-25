import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:8083/";

  /*
  public getCustomers() {
    return this.http.get<Customer[]>("http://localhost:8083/customer");
  }*/

  getAllCustomers(sortBy : string): Observable<any> {
    return this.http.get(this.baseURL + 'customer/?sortBy=' + sortBy);
  }

  getSingleCust(id: number): Observable<any> {
    console.log(id);
    return this.http.get(this.baseURL + 'customer/' + id);
  }
  /*
  public doRegister(customer: Customer) {
    return this.http.post("http://localhost:8083/customer", customer, { responseType: "text" as "json" });
  }*/

  addPerson(customer: Customer): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    console.log(customer);
    const body = JSON.stringify(customer);
    console.log("inside service");
    console.log(body)
    return this.http.post(this.baseURL + 'customer', body, { 'headers': headers, responseType: 'text' })


  }

  updateCust(id : number , customer: Customer): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    console.log(customer);
    const body = JSON.stringify(customer);
    console.log("inside service");
    console.log(body)
    return this.http.put(this.baseURL + 'customer', body, { 'headers': headers, responseType: 'text' })
  }

  deleteCust(id : number) : Observable<any>{
    console.log(id);
    return this.http.delete(this.baseURL + 'customer/' + id , {responseType: 'text' } );
  }

}
