"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    await authClient.signOut();

    router.push("/login");
    router.refresh();
  }

  return (
    <header className="h-16 border-b border-border bg-surface flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold text-foreground">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-sm text-muted">
          Admin
        </span>

        <button
          onClick={handleLogout}
          disabled={loading}
          className="rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-raised disabled:opacity-50"
        >
          {loading ? "Signing out..." : "Logout"}
        </button>
      </div>
    </header>
  );
}