import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import StatCard from "@/components/StatCard";
import prisma from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const customers = await prisma.customer.count();
  const users = await prisma.user.count();


  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Dashboard
        </h1>
        <p className="mt-2 text-base text-muted">
          Welcome back,{" "}
          <span className="font-medium text-foreground">{session.user.name}</span>
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total customers" value={customers.toString()} />
        <StatCard title="Open leads" value="0" />
        <StatCard title="Active users" value={users.toString()} />
        <StatCard title="Conversion" value="—" />
      </div>
    </div>
  );
}
