"use client";

import { createCustomer } from "@/app/dashboard/customers/actions";
import { useState } from "react";

export default function CustomerForm() {
  const [loading, setLoading] = useState(false);

  return (
    <form
      action={async (formData) => {
        setLoading(true);

        try {
          await createCustomer(formData);
        } catch (error) {
          console.error(error);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      }}
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
          className="w-full rounded-md border border-border bg-surface-raised px-4 py-2.5 text-foreground outline-none placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          className="w-full rounded-md border border-border bg-surface-raised px-4 py-2.5 text-foreground outline-none placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-accent-strong px-5 py-2.5 font-medium text-background transition-colors hover:bg-accent disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Customer"}
        </button>
      </div>
    </form>
  );
}