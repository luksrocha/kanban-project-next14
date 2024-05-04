"use server";

import { TASK_FORM_NAMES_CONSTANTS } from "@/constants/taskFormNamesConstants";
import { validateTaskSchema } from "@/lib/zod/validateTaskSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreateTaskFormState {
    errors: {
        title?: string;
        description?: string;
        date?: string;
    };
}

export async function createTask(
    formState: CreateTaskFormState,
    formData: FormData
): Promise<CreateTaskFormState> {
    console.log("ENTROU AQUI");
    const title = formData.get(TASK_FORM_NAMES_CONSTANTS.TITLE);
    const description = formData.get(TASK_FORM_NAMES_CONSTANTS.DESCRIPTION);
    const date = formData.get(TASK_FORM_NAMES_CONSTANTS.DATE);

    const primitiveTask = {
        [TASK_FORM_NAMES_CONSTANTS.TITLE]: title,
        [TASK_FORM_NAMES_CONSTANTS.DESCRIPTION]: description,
        [TASK_FORM_NAMES_CONSTANTS.DATE]: date,
    };

    const results = validateTaskSchema.safeParse(primitiveTask);

    if (!results.success) {
        return {
            errors: results.error.flatten().fieldErrors,
        };
    }

    revalidatePath("/");
    redirect("/");
}
