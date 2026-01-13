-- CreateTable
CREATE TABLE "SelectedLocation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "SelectedLocation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SelectedLocation" ADD CONSTRAINT "SelectedLocation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SelectedLocation" ADD CONSTRAINT "SelectedLocation_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
