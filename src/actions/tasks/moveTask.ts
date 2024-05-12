"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";

export const moveTask = async (taskId: string, collumnId: string) => {
    try {
        await db.task.update({
            where: {
                id: taskId,
            },
            data: {
                collumnId,
            },
        });
    } catch (error) {
        console.log(error);
    }

    revalidatePath("/");
};
