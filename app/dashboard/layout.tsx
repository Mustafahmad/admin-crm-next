export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>Admin CRM</h1>
      </header>

      <main>{children}</main>
    </div>
  );
}
