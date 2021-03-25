/*
  Warnings:

  - Added the required column `job` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Description` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "job" TEXT NOT NULL,
ADD COLUMN     "Description" TEXT NOT NULL;
