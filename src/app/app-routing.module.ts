import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/employees/create-employee/create-employee.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeesComponent
    },
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: 'employee/add',
        component: CreateEmployeeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
