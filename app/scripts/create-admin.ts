import "dotenv/config";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

async function createAdmin() {
  const email = "admin@gmail.com";
  const password = "Admin123!";

  const adminRole = await prisma.role.findUnique({
    where: { name: "Admin" },
  });

  if (!adminRole) {
    throw new Error('Role "Admin" not found. Run the seed first.');
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    await prisma.user.update({
      where: { email },
      data: { roleId: adminRole.id, emailVerified: true },
    });
    console.log("Admin already exists (role updated):", email);
    return;
  }

  await auth.api.signUpEmail({
    body: {
      name: "Admin",
      email,
      password,
    },
  });

  await prisma.user.update({
    where: { email },
    data: { roleId: adminRole.id, emailVerified: true },
  });

  console.log("Admin created:", email);
}

createAdmin()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
