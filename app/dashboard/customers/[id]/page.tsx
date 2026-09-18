import prisma from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CustomerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const customer = await prisma.customer.findUnique({
    where: {
      id,
    },
  });

  if (!customer) {
    notFound();
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Customer Details
          </h1>

          <p className="mt-1 text-muted">
            View customer information.
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
        <div className="space-y-5">
          <div>
            <p className="text-sm text-muted">Name</p>

            <p className="mt-1 text-base font-medium text-foreground">
              {customer.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted">Email</p>

            <p className="mt-1 text-base font-medium text-foreground">
              {customer.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted">Created</p>

            <p className="mt-1 text-base font-medium text-foreground">
              {customer.createdAt.toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted">Last Updated</p>

            <p className="mt-1 text-base font-medium text-foreground">
              {customer.updatedAt.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}