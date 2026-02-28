import z from "zod";

export const leaveRequestBodySchema = z
  .object(
    {
      employeeId: z.number({ message: "Employee ID is required" }),

      startDate: z.coerce.date({
        message: "Start date is required",
      }),

      endDate: z.coerce.date({
        message: "End date is required",
      }),

      reason: z.string({
        message: "Reason is required",
      }),
    },
    {
      message: "Invalid request body",
    },
  )
  .refine((data) => data.startDate <= data.endDate, {
    message: "Start date must be earlier than end date",
    path: ["endDate"],
  });
