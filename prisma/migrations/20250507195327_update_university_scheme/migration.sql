/*
  Warnings:

  - Made the column `companyTitle` on table `universities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `companyLogo` on table `universities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `startAt` on table `universities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `endAt` on table `universities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `universities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `link` on table `universities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `certificate` on table `universities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `universities` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "contact" ALTER COLUMN "github" SET DEFAULT 'https://github.com/unknown';

-- AlterTable
ALTER TABLE "universities" ALTER COLUMN "companyTitle" SET NOT NULL,
ALTER COLUMN "companyLogo" SET NOT NULL,
ALTER COLUMN "startAt" SET NOT NULL,
ALTER COLUMN "endAt" SET NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "link" SET NOT NULL,
ALTER COLUMN "certificate" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
