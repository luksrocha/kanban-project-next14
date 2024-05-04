"use client";

import { useRouter } from "next/navigation";

const ModalOverlay = () => {
    const route = useRouter();

    return (
        <div
            onClick={route.back}
            className="absolute bg-gray-600 z-30 h-full w-full opacity-90"
        />
    );
};

export default ModalOverlay;
