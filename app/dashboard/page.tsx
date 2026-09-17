import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

        <p className="text-gray-500 mt-1">Welcome back, Admin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Customers" value="1,248" />

        <StatCard title="Leads" value="342" />

        <StatCard title="Users" value="24" />

        <StatCard title="Deals" value="86" />
      </div>
    </div>
  );
}
