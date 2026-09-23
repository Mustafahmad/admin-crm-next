"use client";
import { useFormStatus } from "react-dom";



type SubmitButtonProps = {
  mode: "create" | "edit";
};

export default function SubmitButton({ mode }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Saving..." : mode === "create" ? "Create Customer" : "Save Changes"}
    </button>
  );
}