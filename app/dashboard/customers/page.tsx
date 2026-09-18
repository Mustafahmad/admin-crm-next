import Link from "next/link";
import { Suspense } from "react";
import { deleteCustomer } from "@/app/dashboard/customers/actions";
import CustomerSearch from "@/components/customers/CustomerSearch";
import { listCustomers } from "@/services/customer.service";

export default async function CustomersPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  const customers = await listCustomers(search);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

      <div className="mb-4">
        <Suspense
          fallback={
            <div className="h-10 w-full max-w-sm rounded-md border border-border bg-surface-raised" />
          }
        >
          <CustomerSearch />
        </Suspense>
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
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-6 py-4 text-sm font-medium text-foreground">
                  {customer.name}
                </td>
                <td className="px-6 py-4 text-sm text-muted">{customer.email}</td>
                <td className="px-6 py-4 text-sm text-muted">
                  {customer.createdAt.toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm">
                  <Link
                    href={`/dashboard/customers/${customer.id}/edit`}
                    className="mr-3 font-medium text-accent hover:underline"
                  >
                    Edit
                  </Link>
                  <Link
                    href={`/dashboard/customers/${customer.id}`}
                    className="mr-3 font-medium text-accent hover:underline"
                  >
                    View
                  </Link>
                  <form action={deleteCustomer} className="inline">
                    <input type="hidden" name="id" value={customer.id} />
                    <button
                      type="submit"
                      className="font-medium text-danger hover:underline"
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {customers.length === 0 && (
          <div className="px-6 py-10 text-center text-sm text-muted">
            {search?.trim()
              ? "No customers match your search."
              : "No customers found."}
          </div>
        )}
      </div>
    </div>
  );
}
