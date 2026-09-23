type Customer = {
    id: string;
};

export default async function CustomerHeader({
  customer,
}: {
  customer: Customer;
}) {
  return (
    <div className="max-w-2xl rounded-xl border border-border bg-surface p-6">
      <div className="space-y-5">
        <div>
          <p className="text-sm text-muted text-center">Customer ID</p>
          <p className="mt-1 text-base font-medium text-foreground text-center">
            {customer.id}
          </p>
        </div>
      </div>
    </div>
  );
}
