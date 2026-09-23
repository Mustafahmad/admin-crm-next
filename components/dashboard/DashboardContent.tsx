import {
  getRecentCustomers,
  getDashboardStats,
} from "@/services/dashboard.service";
import DashboardStats from "./DashboardStats";
import RecentCustomers from "./RecentCustomers";


export default async function DashboardContent() {
  const [stats, customers] = await Promise.all([
    getDashboardStats(),
    getRecentCustomers(),
  ]);

  return (
    <div className="space-y-6">
      <DashboardStats customers={stats.customers} users={stats.users} />

      <RecentCustomers customers={customers} />
    </div>
  );
}
