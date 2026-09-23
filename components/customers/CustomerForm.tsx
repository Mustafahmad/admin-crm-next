"use client";

import {
  createCustomer,
  editCustomer,
} from "@/app/dashboard/customers/actions";
import SubmitButton from "./SubmitButton";
import { useActionState } from "react";

type Customer = {
  id: string;
  name: string;
  email: string;
};

type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
  };
  message?: string;
};

type CustomerFormProps = {
  customer?: Customer;
  mode?: "create" | "edit";
};

const initialState: FormState = {
  errors: {},
  message: "",
};

export default function CustomerForm({
  customer,
  mode = "create",
}: CustomerFormProps) {
  const action =
    mode === "edit" && customer
      ? editCustomer.bind(null, customer.id)
      : createCustomer;

  const [state, formAction] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-6">
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
          defaultValue={customer?.name ?? ""}
          placeholder="John Doe"
          className="w-full rounded-md border border-border bg-surface-raised px-4 py-2.5 text-foreground outline-none placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />

        {state.errors?.name && (
          <p className="mt-1 text-sm text-danger">{state.errors.name[0]}</p>
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
          defaultValue={customer?.email ?? ""}
          placeholder="john@example.com"
          className="w-full rounded-md border border-border bg-surface-raised px-4 py-2.5 text-foreground outline-none placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />

        {state.errors?.email && (
          <p className="mt-1 text-sm text-danger">{state.errors.email[0]}</p>
        )}
        {state.message && (
          <p className="text-sm text-danger">{state.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <SubmitButton mode={mode} />
      </div>
    </form>
  );
}
