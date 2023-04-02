import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, InputHTMLAttributes } from "react";

const inputStyles = cva("px-2 py-1 rounded-md border shadow-inner bg-white", {
  variants: {
    intent: {
      primary: "border-blue-400",
      secondary: "border-gray-400",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyles> {}

export default function Input({ intent, ...props }: IInputProps) {
  return <input className={inputStyles({ intent })} {...props} />;
}
