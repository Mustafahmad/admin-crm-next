import { getCustomerById } from "@/services/customer.service";
import { withPermission } from "@/lib/auth/with-auth";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

export const GET = withPermission(
    "read:customers",
    async (request: NextRequest, session: Session) => {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { error: "Customer ID is required" },
                { status: 400 }
            );
        }

        const customer = await getCustomerById(id);

        if (!customer) {
            return NextResponse.json(
                { error: "Customer not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(customer);
    }
);