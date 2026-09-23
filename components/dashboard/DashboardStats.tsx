import { getDashboardStats } from "@/services/dashboard.service";
import StatCard from "@/components/StatCard";


export default async function DashboardStats() {
    const stats = await getDashboardStats();
    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total customers" value={stats.customers.toString()} />
        <StatCard title="Open leads" value="0" />
        <StatCard title="Active users" value={stats.users.toString()} />
        <StatCard title="Conversion" value="—" />
      </div>
    )
}