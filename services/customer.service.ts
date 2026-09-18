import prisma from "@/lib/prisma";

type CustomerInput = {
  name: string;
  email: string;
};

export type CustomerWriteResult =
  | { ok: true }
  | { ok: false; field: "email"; message: string };

function isEmailUniqueViolation(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code: string }).code === "P2002"
  );
}

export async function getCustomerById(id: string) {
  return prisma.customer.findUnique({
    where: { id },
  });
}

export async function listCustomers(search?: string) {
  const query = search?.trim();

  return prisma.customer.findMany({
    where: query
      ? {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { email: { contains: query, mode: "insensitive" } },
          ],
        }
      : undefined,
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createCustomer(
  data: CustomerInput
): Promise<CustomerWriteResult> {
  try {
    await prisma.customer.create({ data });
    return { ok: true };
  } catch (error) {
    if (isEmailUniqueViolation(error)) {
      return {
        ok: false,
        field: "email",
        message: "A customer with this email already exists.",
      };
    }
    throw error;
  }
}

export async function updateCustomer(
  id: string,
  data: CustomerInput
): Promise<CustomerWriteResult> {
  try {
    await prisma.customer.update({
      where: { id },
      data,
    });
    return { ok: true };
  } catch (error) {
    if (isEmailUniqueViolation(error)) {
      return {
        ok: false,
        field: "email",
        message: "A customer with this email already exists.",
      };
    }
    throw error;
  }
}

export async function deleteCustomer(id: string) {
  await prisma.customer.delete({
    where: { id },
  });
}
