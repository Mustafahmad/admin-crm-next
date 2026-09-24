"use client";

export default function CustomerError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="rounded-lg border border-border p-6">
      <h2 className="text-lg font-semibold text-foreground">
        Something went wrong
      </h2>

      <p className="mt-2 text-sm text-muted">
        We couldn't load this customer's activity.
      </p>

      <button
        onClick={() => reset()}
        className="mt-4 rounded-md bg-accent-strong px-4 py-2 text-sm text-white"
      >
        Try again
      </button>
    </div>
  );
}