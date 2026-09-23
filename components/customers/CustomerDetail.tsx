type Customer = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

export default async function CustomerDetail({
  customer,
}: {
  customer: Customer;
}) {
  return (
    <div className="space-y-6">
      <div className="max-w-2xl rounded-xl border border-border bg-surface p-6">
        <div className="space-y-5">
          <div>
            <p className="text-sm text-muted">Name</p>
            <p className="mt-1 text-base font-medium text-foreground">
              {customer.name}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted">Email</p>
            <p className="mt-1 text-base font-medium text-foreground">
              {customer.email}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted">Created At</p>
            <p className="mt-1 text-base font-medium text-foreground">
              {customer.createdAt.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
