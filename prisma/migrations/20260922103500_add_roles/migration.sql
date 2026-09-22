-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolePermission" (
    "roleId" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,
    CONSTRAINT "RolePermission_pkey" PRIMARY KEY ("roleId","permissionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_name_key" ON "Permission"("name");

-- CreateIndex
CREATE INDEX "RolePermission_permissionId_idx" ON "RolePermission"("permissionId");

-- Seed roles before backfilling users
INSERT INTO "Role" ("id", "name") VALUES
  ('role_admin', 'Admin'),
  ('role_manager', 'Manager'),
  ('role_viewer', 'Viewer');

-- Add nullable roleId, backfill, then enforce NOT NULL
ALTER TABLE "user" ADD COLUMN "roleId" TEXT;

UPDATE "user"
SET "roleId" = CASE
  WHEN lower("role") IN ('admin') THEN 'role_admin'
  WHEN lower("role") IN ('manager') THEN 'role_manager'
  WHEN lower("role") IN ('viewer') THEN 'role_viewer'
  ELSE 'role_admin'
END;

ALTER TABLE "user" ALTER COLUMN "roleId" SET NOT NULL;
ALTER TABLE "user" DROP COLUMN "role";

-- CreateIndex
CREATE INDEX "user_roleId_idx" ON "user"("roleId");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;