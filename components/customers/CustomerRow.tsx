"use client";

import Link from "next/link";

import { deleteCustomer } from "@/app/dashboard/customers/actions";

export default function CustomerRow({
  customer,
  checked,
  onToggle,
}: {
  customer: {
    id: string;
    name: string;
    email: string;
    createdAt: Date | string;
  };
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <tr className="transition-colors hover:bg-surface-raised/70">
      <td className="px-6 py-4">
        <label className="flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={onToggle}
            className="h-4 w-4 cursor-pointer rounded border-border accent-accent-strong"
          />
        </label>
      </td>

      <td className="px-6 py-4 text-sm font-medium text-foreground">
        {customer.name}
      </td>

      <td className="px-6 py-4 text-sm text-muted">
        {customer.email}
      </td>

      <td className="px-6 py-4 text-sm text-muted">
        {new Date(customer.createdAt).toLocaleDateString()}
      </td>

      <td className="px-6 py-4 text-sm">
        <div className="flex items-center gap-3">
          <Link
            href={`/dashboard/customers/${customer.id}/edit`}
            className="font-medium text-accent hover:underline"
          >
            Edit
          </Link>

          <Link
            href={`/dashboard/customers/${customer.id}`}
            className="font-medium text-accent hover:underline"
          >
            View
          </Link>

          <form action={deleteCustomer}>
            <input type="hidden" name="id" value={customer.id} />

            <button
              type="submit"
              className="font-medium text-danger hover:underline"
            >
              Delete
            </button>
          </form>
        </div>
      </td>
    </tr>
  );
}

