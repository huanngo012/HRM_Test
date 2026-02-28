import z from "zod";

export const employeeBodySchema = z.object(
  {
    name: z.string({ message: "Name is required" }),

    department: z.string({ message: "Department is required" }),

    leaveBalance: z
      .number({ message: "Leave balance is required" })
      .min(0, "Leave balance cannot be less than 0"),
  },
  {
    message: "Invalid request body",
  },
);
