/*
  Warnings:

  - Added the required column `hallId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_id_hallName_fkey";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "hallId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_hallId_hallName_fkey" FOREIGN KEY ("hallId", "hallName") REFERENCES "Room"("id", "hallName") ON DELETE RESTRICT ON UPDATE CASCADE;
