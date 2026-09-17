export default async function Leads({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main>
      <h1>Leads: {id} ID</h1>
      <p>Where the Leads will be listed with the ID: {id}</p>
    </main>
  );
}