import Link from "next/link";
import CustomerForm from "@/components/customers/CustomerForm";

export default function CreateCustomerPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Create Customer
          </h1>

          <p className="mt-1 text-muted">
            Add a new customer to your CRM.
          </p>
        </div>

        <Link
          href="/dashboard/customers"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-raised"
        >
          Back to Customers
        </Link>
      </div>

      <div className="max-w-2xl rounded-xl border border-border bg-surface p-6">
        <CustomerForm />
      </div>
    </div>
  );
}