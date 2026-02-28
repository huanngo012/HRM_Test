import createError from "http-errors";
import { employees, leaveRequests } from "~/data/store";
import { ILeaveRequest, LeaveRequestBody } from "~/types/leave-request.type";

const LeaveRequestService = {
  getLeaveRequestsService: () => {
    return leaveRequests;
  },

  createLeaveRequestService: (payload: LeaveRequestBody) => {
    const employee = employees.find((item) => item.id === payload.employeeId);
    if (!employee) throw createError(404, "Employee not found");

    if (employee.leaveBalance <= 0)
      throw createError(400, "Insufficient leave balance");

    const newLeave: ILeaveRequest = {
      id: Date.now(),
      ...payload,
      approve: "Pending",
    };
    leaveRequests.push(newLeave);
    employee.leaveBalance -= 1;
    return newLeave;
  },

  updateApproveLeaveRequestService: (id: number) => {
    const leaveRequest = leaveRequests.find(
      (item) => item.id === id && item.approve === "Pending",
    );
    if (!leaveRequest) throw createError(404, "Leave request not found");
    leaveRequest.approve = "Approved";
    return true;
  },
};
export default LeaveRequestService;
