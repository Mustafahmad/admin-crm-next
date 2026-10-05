"use client";

import { useState } from "react";

import CustomerRow from "./CustomerRow";

type Customer = {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
};

export default function CustomerTable({
  customers,
}: {
  customers: Customer[];
}) {
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);

  const handleSelectAll = () => {
    if (selectedCustomers.length === customers.length) {
      setSelectedCustomers([]);
    } else {
      setSelectedCustomers(customers.map((customer) => customer.id));
    }
  };

  const handleSelectCustomer = (id: string) => {
    setSelectedCustomers((prev) =>
      prev.includes(id)
        ? prev.filter((customerId) => customerId !== id)
        : [...prev, id],
    );
  };

  const deselectAllCustomers = () => {
    setSelectedCustomers([]);
  };

  const allSelected =
    customers.length > 0 &&
    selectedCustomers.length === customers.length;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      {/* Bulk actions */}
      <div className="flex min-h-14 items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          {selectedCustomers.length > 0 ? (
            <>
              <span className="text-sm font-medium text-foreground">
                {selectedCustomers.length} selected
              </span>

              <button
                type="button"
                onClick={deselectAllCustomers}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-surface-raised hover:text-foreground"
              >
                Deselect All
              </button>
            </>
          ) : (
            <span className="text-sm text-muted">
              Select customers to perform bulk actions
            </span>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="border-b border-border bg-surface-raised">
            <tr>
              <th className="px-6 py-3 text-left">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={handleSelectAll}
                    className="h-4 w-4 cursor-pointer rounded border-border accent-accent-strong"
                  />

                  <span className="text-sm font-medium text-muted">
                    Select All
                  </span>
                </label>
              </th>

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

          <tbody className="divide-y divide-border bg-surface">
            {customers.map((customer) => (
              <CustomerRow
                key={customer.id}
                customer={customer}
                checked={selectedCustomers.includes(customer.id)}
                onToggle={() => handleSelectCustomer(customer.id)}
              />
            ))}
          </tbody>

          {selectedCustomers.length > 0 && (
            <tfoot className="border-t border-border bg-surface-raised">
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-3 text-sm font-medium text-muted"
                >
                  Selected {selectedCustomers.length} customer
                  {selectedCustomers.length !== 1 ? "s" : ""}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}