import express from "express";
import EmployeeController from "~/controllers/employee.controller";
import { validateRequestBody } from "~/middlewares/validation.middleware";
import { employeeBodySchema } from "~/schemas/employee.schema";

const router = express.Router();

router.get("/", EmployeeController.getEmployees);
router.get("/:id", EmployeeController.getEmployeeById);
router.post(
  "/",
  validateRequestBody(employeeBodySchema),
  EmployeeController.createEmployee,
);
router.delete("/:id", EmployeeController.deleteEmployee);

export default router;
