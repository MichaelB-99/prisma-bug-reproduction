-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_userId_key" ON "Post"("id", "userId");
