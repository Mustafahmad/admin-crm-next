import StatCard from "@/components/StatCard";

type DashboardStats = {
    customers: number;
    users: number;
};

export default function DashboardStats({ customers, users }: DashboardStats) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard title="Total customers" value={customers.toString()} />
      <StatCard title="Open leads" value="0" />
      <StatCard title="Active users" value={users.toString()} />
      <StatCard title="Conversion" value="—" />
    </div>
  );
}