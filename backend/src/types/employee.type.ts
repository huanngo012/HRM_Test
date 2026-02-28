export interface IEmployee {
  id: number;
  name: string;
  department: string;
  leaveBalance: number;
}

export interface EmployeeBody {
  name: string;
  department: string;
  leaveBalance: number;
}
