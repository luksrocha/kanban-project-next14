"use server";

import { db } from "@/db";
import { Collumn, Prisma, Task } from "@prisma/client";

export interface CollumnsDataWithTasks extends Collumn {
    tasks: Task[];
}

export const getCollumns = async (): Promise<CollumnsDataWithTasks[]> => {
    const tasks = await db.collumn.findMany({ include: { tasks: true } });

    return tasks;
};
