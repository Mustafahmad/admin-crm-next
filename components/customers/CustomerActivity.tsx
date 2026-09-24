export default async function CustomerActivity() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const shouldFail = Math.random() > 0.5;

  if (shouldFail) {
    throw new Error("Customer activity failed to load");
  }

  return (
    <div>
      <h2>Customer Activity</h2>
      <p>Activity loaded successfully.</p>
    </div>
  );
}