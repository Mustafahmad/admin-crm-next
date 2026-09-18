import Link from "next/link";
import { notFound } from "next/navigation";

import CustomerForm from "@/components/customers/CustomerForm";
import { getCustomerById } from "@/services/customer.service";

export default async function EditCustomerPage({
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
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Edit Customer
          </h1>

          <p className="mt-1 text-muted">
            Update customer information.
          </p>
        </div>

        <Link
          href={`/dashboard/customers/${id}`}
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-raised"
        >
          Cancel
        </Link>
      </div>

      <div className="max-w-2xl rounded-xl border border-border bg-surface p-6">
        <CustomerForm
          customer={customer}
          mode="edit"
        />
      </div>
    </div>
  );
}