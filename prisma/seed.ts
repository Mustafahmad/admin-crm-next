import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Starting seed...");
  const adminRole = await prisma.role.upsert({
    where: {
      name: "Admin",
    },
    update: {},
    create: {
      name: "Admin",
    },
  });

  const managerRole = await prisma.role.upsert({
    where: {
      name: "Manager",
    },
    update: {},
    create: {
      name: "Manager",
    },
  });

  const viewerRole = await prisma.role.upsert({
    where: {
      name: "Viewer",
    },
    update: {},
    create: {
      name: "Viewer",
    },
  });

  console.log("Roles created:", {
    admin: adminRole.name,
    manager: managerRole.name,
    viewer: viewerRole.name,
  });

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
