export interface Employee {
    id: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    contactNumber: string;
    department: string;
    address_1: string;
    address_2?: string;
    postalCode: number;
    country: string;
    salary: number;
}
