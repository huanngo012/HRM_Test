export interface ILeaveRequest {
  id: number;
  employeeId: number;
  startDate: Date;
  endDate: Date;
  reason: string;
  approve: "Pending" | "Approved";
}

export interface LeaveRequestBody {
  employeeId: number;
  startDate: Date;
  endDate: Date;
  reason: string;
}
