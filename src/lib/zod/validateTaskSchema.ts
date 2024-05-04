import { TASK_FORM_NAMES_CONSTANTS } from "@/constants/taskFormNamesConstants";
import { z } from "zod";

export const validateTaskSchema = z.object({
    [TASK_FORM_NAMES_CONSTANTS.TITLE]: z
        .string()
        .max(50, { message: "Must be 50 or fewer characters long" })
        .min(5, { message: "Must be 5 or more characters long" }),
    [TASK_FORM_NAMES_CONSTANTS.DESCRIPTION]: z
        .string({
            message: "Must be an string",
        })
        .min(5, { message: "Must be 5 or more characters long" }),
    [TASK_FORM_NAMES_CONSTANTS.DATE]: z
        .string({
            message: "Must be an string",
        })
        .min(5, { message: "Must be 5 or more characters long" }),
});
