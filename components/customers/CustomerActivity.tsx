let attempts = 0;

export default async function CustomerActivity() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  attempts++;

  if (attempts === 1) {
    throw new Error("Failed to load customer activity");
  }

  return (
    <div>
      <h2>Customer Activity</h2>
      <p>Activity loaded successfully.</p>
    </div>
  );
}