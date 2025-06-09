-- AlterTable
ALTER TABLE "feedbacks" ADD COLUMN     "city" TEXT NOT NULL DEFAULT 'Moscow',
ADD COLUMN     "country" TEXT NOT NULL DEFAULT 'Russia';
