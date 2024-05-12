"use client";

import {
    CollumnsDataWithTasks,
    getCollumns,
} from "@/actions/collumns/getCollumns";
import { TASK_FORM_NAMES_CONSTANTS } from "@/constants/taskFormNamesConstants";
import { Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

const TaskFormInputList = () => {
    const [collumns, setCollumns] = useState<CollumnsDataWithTasks[]>([]);

    const fetchCollumns = async () => {
        const results = await getCollumns();
        setCollumns(results);
    };

    useEffect(() => {
        fetchCollumns();
    }, []);

    return (
        <Select
            name={TASK_FORM_NAMES_CONSTANTS.COLLUMN}
            placeholder="Pick a collumn"
            label="Collumn"
            labelPlacement="inside"
        >
            {collumns.map((collumn) => (
                <SelectItem key={collumn.id} value={collumn.id}>
                    {collumn.title}
                </SelectItem>
            ))}
        </Select>
    );
};

export { TaskFormInputList };
