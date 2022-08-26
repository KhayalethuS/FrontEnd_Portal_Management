import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  page = 1;
  pageSize = 5;
  isLoading: boolean = false;
  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.getListOfEmployes();
     }, 5000)
  }

  getListOfEmployes():Employee[] {
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees = employees;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        throw new Error(err);
      }
    })

    return this.employees;
  }

}
