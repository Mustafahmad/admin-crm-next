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


  for (const permission of permissions) {
    const newPermission = await prisma.permission.upsert({
      where: {
        name: permission,
      },
      update: {},
      create: {
        name: permission,
      },
    });

    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: { roleId: adminRole.id, permissionId: newPermission.id },
      },
      update: {},
      create: {
        roleId: adminRole.id,
        permissionId: newPermission.id,
      },
    });

    if (managerPermissions.includes(permission)) {
      await prisma.rolePermission.upsert({
        where: {
          roleId_permissionId: { roleId: managerRole.id, permissionId: newPermission.id },
        },
        update: {},
        create: {
          roleId: managerRole.id,
          permissionId: newPermission.id,
        },
      });
    }
    if (viewerPermissions.includes(permission)) {
      await prisma.rolePermission.upsert({
        where: {
          roleId_permissionId: { roleId: viewerRole.id, permissionId: newPermission.id },
        },
        update: {},
        create: {
          roleId: viewerRole.id,
          permissionId: newPermission.id,
        },
      });
    }
  }

  console.log("Roles created:", {
    admin: adminRole.name,
    manager: managerRole.name,
    viewer: viewerRole.name,
  });

}

const managerPermissions = [
  "customer.view",
  "customer.create",
  "customer.update",

  "user.create",
  "user.view",

  "role.view",
  "role.create",

  "permission.create",
  "permission.view",
];

const viewerPermissions = [
  "customer.view",
  "user.view",
  "role.view",
  "permission.view",
];

const permissions = [
  "customer.view",
  "customer.create",
  "customer.update",
  "customer.delete",

  "user.view",
  "user.create",
  "user.update",
  "user.delete",

  "role.view",
  "role.create",
  "role.update",
  "role.delete",

  "permission.view",
  "permission.create",
  "permission.update",
  "permission.delete",

];

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
