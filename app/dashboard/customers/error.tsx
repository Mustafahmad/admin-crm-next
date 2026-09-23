"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong</h2>

      <button onClick={() => reset()} className="rounded-md bg-accent-strong px-4 py-2 text-sm text-white mt-4">
        Try again
      </button>
    </div>
  );
}