import Link from "next/link";
import { Suspense } from "react";
import { deleteCustomer } from "@/app/dashboard/customers/actions";
import CustomerSearch from "@/components/customers/CustomerSearch";
import { listCustomers } from "@/services/customer.service";
import CustomerTable from "@/components/customers/CustomerTable";

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
      <CustomerTable customers={customers} />
    </div>
  );
}
