-- CreateTable
CREATE TABLE "Collumn" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "collumnId" TEXT,
    CONSTRAINT "Task_collumnId_fkey" FOREIGN KEY ("collumnId") REFERENCES "Collumn" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
