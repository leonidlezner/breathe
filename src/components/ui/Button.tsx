import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

const buttonStyles = cva("px-5 py-1 rounded-md shadow-sm", {
  variants: {
    intent: {
      primary:
        "bg-blue-800 text-blue-200 hover:bg-blue-700 hover:text-blue-50 active:bg-blue-900 active:text-blue-400",
      secondary:
        "bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-gray-50 active:bg-gray-900 active:text-gray-400",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children: ReactNode;
}

export default function Button({ intent, children, ...rest }: IButtonProps) {
  return (
    <button className={buttonStyles({ intent })} {...rest}>
      {children}
    </button>
  );
}
