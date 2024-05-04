"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { useDrag } from "react-dnd";

const ActivityCard = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "TESTE",
        item: () => ({ id: "teste" }),
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <Card ref={drag} className=" w-64 h-48 ">
            <CardHeader>Name of task</CardHeader>
            <Divider />
            <CardBody className="scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-green-900 scrollbar-w-2">
                <h5>Description:</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore, repellat illo? Pariatur quisquam, unde natus omnis
                    recusandae beatae explicabo ea iusto reprehenderit molestiae
                    possimus, enim a nemo. Iure, quisquam consectetur!
                </p>
            </CardBody>
        </Card>
    );
};

export default ActivityCard;
