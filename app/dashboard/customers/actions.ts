"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { customerSchema } from "@/lib/validations/customer";
import * as customerService from "@/services/customer.service";

export async function createCustomer(formData: FormData) {
  const validated = customerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors };
  }

  const result = await customerService.createCustomer(validated.data);

  if (!result.ok) {
    return { errors: { [result.field]: [result.message] } };
  }

  revalidatePath("/dashboard/customers");
  redirect("/dashboard/customers");
}

export async function editCustomer(id: string, formData: FormData) {
  const validated = customerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors };
  }

  const result = await customerService.updateCustomer(id, validated.data);

  if (!result.ok) {
    return { errors: { [result.field]: [result.message] } };
  }

  revalidatePath("/dashboard/customers");
  revalidatePath(`/dashboard/customers/${id}`);
  redirect("/dashboard/customers");
}

export async function deleteCustomer(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  await customerService.deleteCustomer(id);
  revalidatePath("/dashboard/customers");
}
