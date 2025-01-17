/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id,hallName]` on the table `Room` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userName` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_id_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- DropIndex
DROP INDEX "User_id_key";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "userName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Room_id_hallName_key" ON "Room"("id", "hallName");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_name_key" ON "User"("id", "name");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_userName_fkey" FOREIGN KEY ("userId", "userName") REFERENCES "User"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_id_hallName_fkey" FOREIGN KEY ("id", "hallName") REFERENCES "Room"("id", "hallName") ON DELETE RESTRICT ON UPDATE CASCADE;
