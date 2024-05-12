"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import React, { ReactNode, ComponentProps } from "react";
import { useFormStatus } from "react-dom";

interface FormButtonProps extends Omit<ButtonProps, "isLoading"> {
    children: ReactNode;
}

const FormButton = ({ children, ...props }: FormButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <Button {...props} type="submit" isLoading={pending}>
            {children}
        </Button>
    );
};

export { FormButton };
