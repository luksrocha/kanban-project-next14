import { ReactNode } from "react";
import ModalOverlay from "./ModalOverlay";

interface ModalStructureProps {
    children: ReactNode;
}

const ModalStructure = ({ children }: ModalStructureProps) => {
    return (
        <div className="min-h-full-without-header w-full absolute flex items-center justify-center z-20">
            <ModalOverlay />
            {children}
        </div>
    );
};

export default ModalStructure;
