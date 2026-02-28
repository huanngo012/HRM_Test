import createError from "http-errors";
import { employees } from "~/data/store";
import { EmployeeBody, IEmployee } from "~/types/employee.type";

const EmployeeService = {
  getEmployeesService: () => {
    return employees;
  },

  getEmployeeByIdService: (_id: number) => {
    const employee = employees.find((e) => e.id === _id);
    if (!employee) throw createError(404, "Employee not found");
    return employee || null;
  },

  createEmployeeService: (payload: EmployeeBody) => {
    const newEmployee: IEmployee = {
      id: Date.now(),
      ...payload,
    };
    employees.push(newEmployee);
    return newEmployee;
  },

  deleteEmployeeService: (_id: number) => {
    const index = employees.findIndex((e) => e.id === _id);
    if (index === -1) throw createError(404, "Employee not found");
    employees.splice(index, 1);
    return true;
  },
};
export default EmployeeService;
