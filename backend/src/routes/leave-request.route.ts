import express from "express";
import LeaveRequestController from "~/controllers/leave-request.controller";
import { validateRequestBody } from "~/middlewares/validation.middleware";
import { leaveRequestBodySchema } from "~/schemas/leave-request.schema";

const router = express.Router();

router.get("/", LeaveRequestController.getLeaveRequests);
router.post(
  "/",
  validateRequestBody(leaveRequestBodySchema),
  LeaveRequestController.createLeaveRequest,
);
router.patch("/:id/approve", LeaveRequestController.updateApproveLeaveRequest);

export default router;
