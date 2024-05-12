"use client";

import { useDrop } from "react-dnd";
import ActivityCard from "../ActivityCard";
import { CollumnsDataWithTasks } from "@/actions/collumns/getCollumns";
import { useRef } from "react";
import { moveTask } from "@/actions/tasks/moveTask";

interface CardsCollumnsProps {
    collumn: CollumnsDataWithTasks;
}

const CardsCollum = ({ collumn }: CardsCollumnsProps) => {
    const [collectedProps, drop] = useDrop(() => ({
        accept: "TESTE",
        drop: (item) => {
            if (
                item &&
                typeof item === "object" &&
                "id" in item &&
                typeof item.id === "string"
            ) {
                moveTask(item.id, collumn.id);
            }
        },
    }));

    const cardRef = useRef<HTMLDivElement>(null);
    drop(cardRef);

    if (!collumn) return null;

    return (
        <div
            key={collumn.id}
            ref={cardRef}
            className="rounded border-1 min-w-64 p-2 overflow-hidden max-h-full flex flex-col gap-4"
        >
            <h1 className="text-3xl">{collumn.title}</h1>
            <div className="px-2 flex flex-col gap-4 overflow-scroll overflow-x-hidden scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-900 scrollbar-w-2">
                {collumn?.tasks.map((task) => (
                    <ActivityCard key={task?.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default CardsCollum;
