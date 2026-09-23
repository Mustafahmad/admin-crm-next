export default function Loading() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="h-8 w-40 animate-pulse rounded-md bg-surface-raised" />
          <div className="mt-2 h-4 w-64 animate-pulse rounded-md bg-surface-raised" />
        </div>

        <div className="h-10 w-36 animate-pulse rounded-md bg-surface-raised" />
      </div>

      {/* Search */}
      <div className="h-10 w-full animate-pulse rounded-md bg-surface-raised" />

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-border">
        <div className="h-12 animate-pulse bg-surface-raised" />

        <div className="divide-y divide-border">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 px-6 py-4">
              <div className="h-5 w-32 animate-pulse rounded bg-surface-raised" />
              <div className="h-5 w-48 animate-pulse rounded bg-surface-raised" />
              <div className="h-5 w-20 animate-pulse rounded bg-surface-raised" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
