export default async function Customers({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main>
      <h1>Customers: {id} ID</h1>
      <p>Where the Customers will be listed with the ID: {id}</p>
    </main>
  );
}