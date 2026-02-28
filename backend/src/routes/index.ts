import express from "express";
import employee from "./employee.route";
import leaveRequest from "./leave-request.route";
import { errorHandler, notFound } from "~/middlewares/error.middleware";

const router = express.Router();

router.use("/employees", employee);
router.use("/leave", leaveRequest);
router.use(notFound);
router.use(errorHandler);

export default router;
