import CustomerHeader from "@/components/customers/CustomerHeader";
import CustomerDetail from "@/components/customers/CustomerDetail";
import Link from "next/link";
import { getCustomerById } from "@/services/customer.service";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import CustomerActivity from "@/components/customers/CustomerActivity";

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
      <Suspense fallback={<div>Loading...</div>}>
        <CustomerActivity />
      </Suspense>
    </div>
  );
}
