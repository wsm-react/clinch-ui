/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `BlogPost` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BlogPost_uuid_key" ON "BlogPost"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_uuid_key" ON "Comment"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");
