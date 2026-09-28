"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type CustomerModalProps = {
  children: React.ReactNode;
  title?: string;
};

export default function CustomerModal({
  children,
  title = "Customer Details",
}: CustomerModalProps) {
  const router = useRouter();

  function close() {
    router.back();
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close modal overlay"
        className="absolute inset-0 bg-black/60"
        onClick={close}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="customer-modal-title"
        className="relative z-10 w-full max-w-lg rounded-xl border border-border bg-surface p-6 shadow-xl"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2
            id="customer-modal-title"
            className="text-xl font-semibold text-foreground"
          >
            {title}
          </h2>

          <button
            type="button"
            onClick={close}
            className="rounded-md px-2 py-1 text-sm text-muted hover:bg-surface-raised hover:text-foreground"
          >
            Close
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto">{children}</div>

        <div className="mt-6 flex justify-end gap-3 border-t border-border pt-4">
          <button
            type="button"
            onClick={close}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-raised"
          >
            Back to list
          </button>
        </div>
      </div>
    </div>
  );
}
