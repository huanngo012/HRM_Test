import { Request, Response } from "express";
import EmployeeService from "~/services/employee.service";

const EmployeeController = {
  getEmployees: (req: Request, res: Response) => {
    const response = EmployeeService.getEmployeesService();
    return res.status(200).json({
      success: true,
      data: response,
    });
  },

  getEmployeeById: (req: Request, res: Response) => {
    const { id } = req.params;
    const response = EmployeeService.getEmployeeByIdService(+id);
    return res.status(200).json({
      success: true,
      data: response,
    });
  },

  createEmployee: (req: Request, res: Response) => {
    const payload = req.body;
    const response = EmployeeService.createEmployeeService(payload);
    return res.status(201).json({
      success: true,
      data: response,
    });
  },

  deleteEmployee: (req: Request, res: Response) => {
    const { id } = req.params;
    EmployeeService.deleteEmployeeService(+id);
    return res.status(200).json({
      success: true,
    });
  },
};
export default EmployeeController;
