"use client";

import { useDrop } from "react-dnd";
import ActivityCard from "../ActivityCard";

const CardsCollum = () => {
    const [collectedProps, drop] = useDrop(() => ({
        accept: "TESTE",
        drop: (item, monitor) => {
            console.log("item", item);
            console.log("monitor", monitor);
        },
    }));

    return (
        <div
            ref={drop}
            className="flex flex-col gap-2 border-gray-500 border w-fit rounded p-3 max-h-screen overflow-scroll overflow-x-hidden scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-purple-950 scrollbar-w-2"
        >
            <h1 className="text-3xl">Todo</h1>
            <div className="flex flex-col gap-5">
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
            </div>
        </div>
    );
};

export default CardsCollum;
