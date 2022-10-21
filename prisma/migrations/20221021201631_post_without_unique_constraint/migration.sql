-- CreateTable
CREATE TABLE "PostWithoutUniqueConstraint" (
    "id" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "PostWithoutUniqueConstraint_id_key" ON "PostWithoutUniqueConstraint"("id");
