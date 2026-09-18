import prisma from "@/lib/prisma";
import Link from "next/link";
import { Customer } from "@prisma/client";

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Customers</h1>

          <p className="mt-1 text-muted">Manage your CRM customers.</p>
        </div>

        <Link
          href="/dashboard/customers/create"
          className="rounded-md bg-accent-strong px-4 py-2.5 text-sm font-medium text-background hover:bg-accent"
        >
          + Add Customer
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <table className="w-full">
          <thead className="border-b border-border bg-surface-raised">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-muted">
                Name
              </th>

              <th className="px-6 py-3 text-left text-sm font-medium text-muted">
                Email
              </th>

              <th className="px-6 py-3 text-left text-sm font-medium text-muted">
                Created
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-muted">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {customers.map((customer: Customer) => (
              <tr key={customer.id}>
                <td className="px-6 py-4 text-sm font-medium text-foreground">
                  {customer.name}
                </td>

                <td className="px-6 py-4 text-sm text-muted">
                  {customer.email}
                </td>

                <td className="px-6 py-4 text-sm text-muted">
                  {customer.createdAt.toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm">
                  <Link
                    href={`/dashboard/customers/${customer.id}/edit`}
                    className="mr-2 font-medium text-accent hover:underline"
                  >
                    Edit
                  </Link>
                  <Link
                    href={`/dashboard/customers/${customer.id}`}
                    className="font-medium text-accent hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {customers.length === 0 && (
          <div className="px-6 py-10 text-center text-sm text-muted">
            No customers found.
          </div>
        )}
      </div>
    </div>
  );
}
