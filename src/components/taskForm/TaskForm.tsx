"use client";

import { useFormState } from "react-dom";
import { Button, Input, Textarea } from "@nextui-org/react";

import { createTask } from "@/actions/createTask";
import { TASK_FORM_NAMES_CONSTANTS } from "@/constants/taskFormNamesConstants";

const TaskForm = () => {
    const [formState, action] = useFormState(createTask, {
        errors: {},
    });

    return (
        <form action={action}>
            <div className="flex flex-col gap-4 bg-green-300 w-80">
                <Input
                    name={TASK_FORM_NAMES_CONSTANTS.TITLE}
                    label="Title"
                    labelPlacement="outside"
                    placeholder="Title"
                    isInvalid={!!formState.errors.title}
                    errorMessage={formState.errors.title?.join(", ")}
                />
                <Textarea
                    name={TASK_FORM_NAMES_CONSTANTS.DESCRIPTION}
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Description"
                    isInvalid={!!formState.errors.description}
                    errorMessage={formState.errors.description?.join(", ")}
                />
                <Input
                    name={TASK_FORM_NAMES_CONSTANTS.DATE}
                    label="Date"
                    labelPlacement="outside"
                    placeholder="Date"
                    isInvalid={!!formState.errors.date}
                    errorMessage={formState.errors.date?.join(", ")}
                />
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
};

export default TaskForm;
