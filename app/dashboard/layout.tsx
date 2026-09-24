import { Suspense } from "react";
import DashboardShell from "@/components/DashboardShell";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardShell>{children}</DashboardShell>
    </Suspense>
  );
}

function DashboardLoading() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="w-64 border-r border-border" />
      <main className="flex-1 p-6 md:p-8">
        <div className="h-8 w-32 animate-pulse rounded bg-surface-raised" />
      </main>
    </div>
  );
}