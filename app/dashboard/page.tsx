import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome, {session.user.name}
      </p>
    </div>
  );
}