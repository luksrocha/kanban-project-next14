"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Task } from "@prisma/client";
import { RefObject, useRef } from "react";
import { useDrag } from "react-dnd";

interface ActivityCardProps {
    task: Task;
}

const ActivityCard = ({
    task: { description, title, id },
}: ActivityCardProps) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "TESTE",
        item: () => ({ id }),
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const cardRef = useRef<HTMLDivElement>(null);

    drag(cardRef);

    return (
        <Card ref={cardRef} className="w-64 min-h-48">
            <CardHeader>{title}</CardHeader>
            <Divider />
            <CardBody className="scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-green-900 scrollbar-w-2">
                <h5>Description:</h5>
                <p>{description}</p>
            </CardBody>
        </Card>
    );
};

export default ActivityCard;
