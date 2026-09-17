type StatCardProps = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-lg border border-border bg-surface-raised p-5">
      <p className="text-sm font-medium text-muted">{title}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
        {value}
      </p>
    </div>
  );
}
