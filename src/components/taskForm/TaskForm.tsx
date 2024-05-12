"use client";

import { useFormState } from "react-dom";

import { createTask } from "@/actions/tasks/createTask";
import { TASK_FORM_NAMES_CONSTANTS } from "@/constants/taskFormNamesConstants";

import { FormButton } from "../common/FormButton";
import { Textarea, Input } from "@nextui-org/react";
import { TaskFormInputList } from "./TaskFormInputList";

const TaskForm = () => {
    const [formState, action] = useFormState(createTask, {
        errors: {},
    });

    return (
        <form
            action={action}
            className="w-96 min-h-96 bg-gray-900 z-30 rounded"
        >
            <div className="flex flex-col justify-center p-4 gap-4 h-full w-full ">
                <h1 className="text-xl text-white">Create Task</h1>
                <Input
                    name={TASK_FORM_NAMES_CONSTANTS.TITLE}
                    placeholder="Insert the title!"
                    label="Title"
                    labelPlacement="inside"
                />
                {formState?.errors.title && (
                    <span className="text-red-500">
                        {formState?.errors.title?.join(", ")}
                    </span>
                )}
                <Textarea
                    name={TASK_FORM_NAMES_CONSTANTS.DESCRIPTION}
                    placeholder="Insert the description!"
                    label="Description"
                    labelPlacement="inside"
                />
                {formState?.errors.description && (
                    <p className="text-red-500">
                        {formState?.errors.description?.join(", ")}
                    </p>
                )}
                <TaskFormInputList />
                {formState?.errors.collumn && (
                    <p className="text-red-500">
                        {formState?.errors.collumn?.join(", ")}
                    </p>
                )}
                <FormButton>Submit</FormButton>
                {formState?.errors._form && (
                    <p className="text-red-500">{formState?.errors._form}</p>
                )}
            </div>
        </form>
    );
};

export default TaskForm;
