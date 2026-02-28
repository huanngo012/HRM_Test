import { Request, Response } from "express";
import LeaveRequestService from "~/services/leave-request.service";

const LeaveRequestController = {
  getLeaveRequests: (req: Request, res: Response) => {
    const response = LeaveRequestService.getLeaveRequestsService();
    return res.status(200).json({
      success: true,
      data: response,
    });
  },

  createLeaveRequest: (req: Request, res: Response) => {
    const payload = req.body;
    const response = LeaveRequestService.createLeaveRequestService(payload);
    return res.status(201).json({
      success: true,
      data: response,
    });
  },
  updateApproveLeaveRequest: (req: Request, res: Response) => {
    const { id } = req.params;
    LeaveRequestService.updateApproveLeaveRequestService(+id);
    return res.status(200).json({
      success: true,
    });
  },
};
export default LeaveRequestController;
