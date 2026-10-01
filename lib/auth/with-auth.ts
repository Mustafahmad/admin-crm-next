import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { requirePermission } from "../authorization";

type Session = typeof auth.$Infer.Session;

export function withPermission(
  permission: string,
  handler: (
    request: NextRequest,
    session: Session
  ) => Promise<Response>
) {
  return async (request: NextRequest) => {
    const session = await requirePermission(permission);

    return handler(request, session);
  };
}