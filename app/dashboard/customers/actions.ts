"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { createCustomerSchema } from "@/lib/validations/customer";
import { redirect } from "next/navigation";

export async function createCustomer(formData: FormData) {
  const validatedFields = createCustomerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  await prisma.customer.create({
    data: {
      name: validatedFields.data.name,
      email: validatedFields.data.email,
    },
  });

  revalidatePath("/dashboard/customers");

  redirect("/dashboard/customers");
}