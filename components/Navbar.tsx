export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-surface px-6">
      <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
        Overview
      </h2>

      <span className="rounded-md border border-border bg-surface-raised px-3 py-1.5 text-sm text-foreground">
        Admin
      </span>
    </header>
  );
}
