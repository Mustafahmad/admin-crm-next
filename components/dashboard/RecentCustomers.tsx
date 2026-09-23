import { getRecentCustomers } from "@/services/dashboard.service";


export async function RecentCustomers() {
  const customers = await getRecentCustomers();
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-foreground">Recent customers</h2>
      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full table-fixed min-w-full">
          <thead>
            <tr>
              <th className="text-left text-sm font-medium text-foreground">Customer ID</th>
              <th className="text-left text-sm font-medium text-foreground">Name</th>
              <th className="text-left text-sm font-medium text-foreground">Email</th>
              <th className="text-left text-sm font-medium text-foreground">Created At</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="text-left text-sm text-foreground">
                  {customer.id}
                </td>
                <td className="text-left text-sm text-foreground">
                  {customer.name}
                </td>
                <td className="text-left text-sm text-foreground">
                  {customer.email}
                </td>
                <td className="text-left text-sm text-foreground">
                  {customer.createdAt.toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
