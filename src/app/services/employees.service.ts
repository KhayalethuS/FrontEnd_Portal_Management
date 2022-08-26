import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/employee.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  private baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + '/api/employees')
  }

}
