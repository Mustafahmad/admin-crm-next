import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import CustomerHeader from "@/components/customers/CustomerHeader";
import CustomerDetail from "@/components/customers/CustomerDetail";
import CustomerActivity from "@/components/customers/CustomerActivity";
import ErrorBoundry from "@/components/customers/ErrorBoundry";
import { getCustomerById } from "@/services/customer.service";

export default async function CustomerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const customer = await getCustomerById(id);

  if (!customer) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Customer Details
          </h1>
          <p className="mt-1 text-muted">View customer information.</p>
        </div>

        <Link
          href="/dashboard/customers"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-raised"
        >
          Back to Customers
        </Link>
      </div>

      <CustomerHeader customer={customer} />
      <CustomerDetail customer={customer} />

      <ErrorBoundry>
        <Suspense fallback={<div className="text-muted">Loading activity...</div>}>
          <CustomerActivity />
        </Suspense>
      </ErrorBoundry>
    </div>
  );
}
