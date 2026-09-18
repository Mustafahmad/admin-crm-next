"use client";

import { createCustomer } from "@/app/dashboard/customers/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormErrors = {
  name?: string[];
  email?: string[];
};

export default function CustomerForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();
  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setErrors({});

    const result = await createCustomer(formData);

    if (result?.error) {
      setErrors(result.error);
    } else {
      router.push("/dashboard/customers");
    }

    setLoading(false);
  }

  return (
    <form action={handleSubmit} className="space-y-6">
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
          className="w-full rounded-md border border-border bg-surface-raised px-4 py-2.5 text-foreground outline-none placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-danger">
            {errors.name[0]}
          </p>
        )}
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
          className="w-full rounded-md border border-border bg-surface-raised px-4 py-2.5 text-foreground outline-none placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-danger">
            {errors.email[0]}
          </p>
        )}
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