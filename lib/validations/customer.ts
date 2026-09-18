import { z } from "zod";

export const customerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long.")
    .max(100, "Name cannot exceed 100 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),
});

export const createCustomerSchema = customerSchema;
export const updateCustomerSchema = customerSchema;
