"use client";

import { Button, Input as NextUIInput, Textarea as NextUITextarea } from "@nextui-org/react";
import { useFormState } from "react-dom";

import { createTask } from "@/actions/createTask";
import { TASK_FORM_NAMES_CONSTANTS } from "@/constants/taskFormNamesConstants";

import { Input } from "../ui/input";
import { TextArea } from "../ui/textarea";

const initialState = {
  title: "",
  description: "",
  date: "",
};

const TaskForm = () => {
  const [formState, action] = useFormState(createTask, {
    errors: initialState,
  });

  // REVIEW: This is an example of how to use the useFormState hook in nextui components

  //   return (
  //     <form action={action}>
  //         <div className="flex flex-col gap-4 bg-green-300 w-80">
  //             <NextUIInput
  //                 name={TASK_FORM_NAMES_CONSTANTS.TITLE}
  //                 label="Title"
  //                 labelPlacement="outside"
  //                 placeholder="Title"
  //                 isInvalid={!!formState.errors.title}
  //                 errorMessage={formState.errors.title}
  //             />
  //             <NextUITextarea
  //                 name={TASK_FORM_NAMES_CONSTANTS.DESCRIPTION}
  //                 label="Description"
  //                 labelPlacement="outside"
  //                 placeholder="Description"
  //                 isInvalid={!!formState.errors.description}
  //                 errorMessage={formState.errors.description}
  //             />
  //             <NextUIInput
  //                 name={TASK_FORM_NAMES_CONSTANTS.DATE}
  //                 label="Date"
  //                 labelPlacement="outside"
  //                 placeholder="Date"
  //                 isInvalid={!!formState.errors.date}
  //                 errorMessage={formState.errors.date}
  //             />
  //             <Button type="submit">Submit</Button>
  //         </div>
  //     </form>
  // );

  // REVIEW: This is an example of how to use the useFormState hook in react/html components

  return (
    <form action={action}>
      <div className="flex flex-col gap-4 bg-green-300 w-80">
        <Input name="title" placeholder="Title" />
        {formState?.errors.title && (
          <p className="text-red-500">{formState?.errors.title}</p>
        )}
        <TextArea name={TASK_FORM_NAMES_CONSTANTS.DESCRIPTION} />
        {formState?.errors.description && (
          <p className="text-red-500">{formState?.errors.description}</p>
        )}
        <Input name={TASK_FORM_NAMES_CONSTANTS.DATE} placeholder="Date" />
        {formState?.errors.date && (
          <p className="text-red-500">{formState?.errors.date}</p>
        )}
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default TaskForm;
