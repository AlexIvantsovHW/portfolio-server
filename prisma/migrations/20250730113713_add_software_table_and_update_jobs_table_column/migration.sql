/*
  Warnings:

  - The `software_id` column on the `jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "software_id",
ADD COLUMN     "software_id" INTEGER[];

-- CreateTable
CREATE TABLE "software" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "software_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "software_title_key" ON "software"("title");
