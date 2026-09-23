import prisma from "@/lib/prisma";
import { cacheLife, cacheTag } from "next/cache";

type DashboardStats = {
    customers: number;
    users: number;
};

export async function getDashboardStats(): Promise<DashboardStats> {
    'use cache';
    cacheLife({ stale: 60, revalidate: 60 });
    cacheTag("dashboard-stats");
    const customers = await prisma.customer.count();
    const users = await prisma.user.count();

    return {
        customers,
        users,
    };
}