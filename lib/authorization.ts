import { auth } from "./auth";
import prisma from "./prisma";
import { headers } from "next/headers";


export async function requirePermission(permissionName: string) {
    const headersList = await headers();

    const session = await auth.api.getSession({
        headers: headersList,
    });

    if (!session) {
        throw new Error("Unauthorized");
    }

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { roleId: true },
    });

    if (!user?.roleId) {
        throw new Error("Forbidden");
    }

    const rolePermission = await prisma.rolePermission.findFirst({
        where: {
            roleId: user.roleId,
            permission: {
                name: permissionName,
            },
        },
    });

    if (!rolePermission) {
        throw new Error("Forbidden");
    }

    return session;
}