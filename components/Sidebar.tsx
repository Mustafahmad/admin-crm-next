"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Users", href: "/dashboard/users" },
  { name: "Customers", href: "/dashboard/customers" },
  { name: "Leads", href: "/dashboard/leads" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-border bg-surface px-4 py-6">
      <h1 className="mb-10 px-3 text-lg font-semibold tracking-tight text-foreground">
        Admin CRM
      </h1>

      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-surface-raised text-accent"
                  : "text-muted hover:bg-surface-raised hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
