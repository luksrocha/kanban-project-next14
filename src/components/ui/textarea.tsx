import { ComponentProps, forwardRef } from "react";

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  ComponentProps<"textarea">
>(({ ...props }, ref) => <textarea ref={ref} {...props} />);

TextArea.displayName = "TextArea";
