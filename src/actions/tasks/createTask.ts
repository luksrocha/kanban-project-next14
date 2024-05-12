"use server";

import { TASK_FORM_NAMES_CONSTANTS } from "@/constants/taskFormNamesConstants";
import { db } from "@/db";
import { validateTaskSchema } from "@/lib/zod/validateTaskSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreateTaskFormState {
    errors: {
        title?: string[];
        description?: string[];
        collumn?: string[];
        _form?: string;
    };
}

export async function createTask(
    formState: CreateTaskFormState,
    formData: FormData
): Promise<CreateTaskFormState> {
    const title = formData.get(TASK_FORM_NAMES_CONSTANTS.TITLE);
    const description = formData.get(TASK_FORM_NAMES_CONSTANTS.DESCRIPTION);
    const collumnId = formData.get(TASK_FORM_NAMES_CONSTANTS.COLLUMN);

    const primitiveTask = {
        [TASK_FORM_NAMES_CONSTANTS.TITLE]: title,
        [TASK_FORM_NAMES_CONSTANTS.DESCRIPTION]: description,
        [TASK_FORM_NAMES_CONSTANTS.COLLUMN]: collumnId,
    };

    const results = validateTaskSchema.safeParse(primitiveTask);

    if (!results.success) {
        return {
            errors: results.error.flatten().fieldErrors,
        };
    }

    try {
        await db.task.create({
            data: {
                description: results.data.description,
                title: results.data.title,
                collumnId: results.data.collumn,
            },
        });
    } catch (error) {
        if (error instanceof Error) {
            return {
                errors: {
                    _form: error.message,
                },
            };
        }

        return {
            errors: {
                _form: "Unknown error occuried",
            },
        };
    }

    revalidatePath("/");
    redirect("/");
}
