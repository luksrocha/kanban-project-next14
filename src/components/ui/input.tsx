import { ComponentProps, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ ...props }, ref) => <input ref={ref} {...props} />
);

Input.displayName = "Input";
