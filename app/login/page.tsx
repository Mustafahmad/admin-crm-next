"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      setError(error.message || "Invalid email or password.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm border p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Admin CRM
          </h1>

          <p className="text-gray-500 mt-2 text-gray-900">
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="admin@example.com"
              required
              className="w-full border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="••••••••"
              required
              className="w-full border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md text-gray-900 font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white py-2.5 rounded-md hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}