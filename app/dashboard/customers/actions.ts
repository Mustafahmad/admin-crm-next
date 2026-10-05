"use server";

import { cacheTag, revalidatePath, updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { customerSchema } from "@/lib/validations/customer";
import * as customerService from "@/services/customer.service";
import { requirePermission } from "@/lib/authorization";

type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
  };
  message?: string;
};

export async function createCustomer(
  previousState: FormState,
  formData: FormData
): Promise<FormState> {

  await requirePermission("customer.create");

  const validated = customerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors, message: "Invalid form data" };
  }

  const result = await customerService.createCustomer(validated.data);

  if (!result.ok) {
    return { errors: { [result.field]: [result.message] }, message: result.message };
  }

  revalidatePath("/dashboard/customers");
  updateTag("dashboard-stats");
  redirect("/dashboard/customers");
}

export async function editCustomer(
  id: string,
 _previousState: FormState,
  formData: FormData
): Promise<FormState> {


  await requirePermission("customer.update");
  const validated = customerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors, message: "Invalid form data" };
  }

  const result = await customerService.updateCustomer(id, validated.data);

  if (!result.ok) {
    return { errors: { [result.field]: [result.message] }, message: result.message };
  }

  revalidatePath("/dashboard/customers");
  revalidatePath(`/dashboard/customers/${id}`);
  redirect("/dashboard/customers");
}

export async function deleteCustomer(formData: FormData) {
  const id = String(formData.get("id") ?? "");

  if (!id) return;

  await requirePermission("customer.delete");

  await customerService.deleteCustomer(id);
  updateTag("dashboard-stats");

  revalidatePath("/dashboard/customers");
  redirect("/dashboard/customers");
}

export async function deleteCustomers(ids: string[]) {
  if (ids.length === 0) {
    return { success: false, message: "No customers selected." };
  }

  try {
    await requirePermission("customer.delete");
    await customerService.deleteCustomers(ids);
    updateTag("dashboard-stats");
    revalidatePath("/dashboard/customers");

    const count = ids.length;
    return {
      success: true,
      message:
        count === 1
          ? "Customer deleted successfully."
          : `${count} customers deleted successfully.`,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to delete customers.";
    return { success: false, message };
  }
}

