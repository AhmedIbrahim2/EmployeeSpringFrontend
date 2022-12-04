import { HttpClient, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  public employees :Employee[] | any;
  public employeess :Employee[] | any;
  
  

  constructor(private employeeservice :EmployeeService){}

  ngOnInit(): void {
    this.getEmployee();
   // this.deleteEmployee();
  }
   


    public getEmployee():void{
      this.employeeservice.getEmployee().subscribe(
        (response :Employee[] )=> {
          this.employees = response;
        },
        (error :HttpErrorResponse) =>{
          alert(error.message);
        }
      )   ;

    }


   /* public deleteEmployee():void{
      this.employeeservice.deleteEmployee().subscribe(
        (response :Employee[] )=> {
          this.employees = response;
        },
        (error :HttpErrorResponse) =>{
          alert(error.message);
        }
      )

    }
*/


 public onopenmodel(employee :Employee , mode:String): void{
  const container = document.getElementById('main-container');

  const button =document.createElement('button');
  button.type = 'button';
  button.style.display= 'none';
  button.setAttribute('data-toggle','modal');
  if (mode === 'add'){
    button.setAttribute('data-target' ,'#addEmployeeModal')
  }
  if (mode === 'edit'){
    button.setAttribute('data-target' ,'#updateEmployeeModal')
  }
  if (mode === 'delete'){
    button.setAttribute('data-target' ,'#deleteEmployeeModal')
  }

  container?.appendChild(button);
  button.click();

 }


  
}
