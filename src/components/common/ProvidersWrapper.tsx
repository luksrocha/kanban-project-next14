"use client";

import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface ProvidersWrapperProps {
    children: ReactNode;
}

const ProvidersWrapper = ({ children }: ProvidersWrapperProps) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <NextUIProvider>{children}</NextUIProvider>
        </DndProvider>
    );
};

export default ProvidersWrapper;
