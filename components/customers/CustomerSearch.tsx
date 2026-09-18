"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CustomerSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("search") ?? "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      const trimmed = value.trim();

      if (trimmed) {
        params.set("search", trimmed);
      } else {
        params.delete("search");
      }

      const next = params.toString();
      const current = searchParams.toString();
      if (next === current) return;

      router.push(next ? `/dashboard/customers?${next}` : "/dashboard/customers");
    }, 300);

    return () => clearTimeout(timer);
  }, [value, router, searchParams]);

  return (
    <input
      type="search"
      placeholder="Search by name or email"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      className="w-full max-w-sm rounded-md border border-border bg-surface-raised px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent"
    />
  );
}
