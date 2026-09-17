export default async function UserDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main>
      <h1>User Details</h1>
      <p>User ID: {id}</p>
    </main>
  );
}
