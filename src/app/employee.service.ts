import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiserverurl =enviroment.apibaseurl;



  constructor(private http :HttpClient) { }
  public getEmployee():Observable<any>{
    return this.http.get<any>("http://localhost:8080/employees/all");
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>("http://localhost:8080/employees/create",employee);
  }

  

 

}
