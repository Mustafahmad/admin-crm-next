"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCustomer(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email) {
    throw new Error("Name and email are required.");
  }

  await prisma.customer.create({
    data: {
      name: String(name),
      email: String(email),
    },
  });

  revalidatePath("/dashboard/customers");

  redirect("/dashboard/customers");
}